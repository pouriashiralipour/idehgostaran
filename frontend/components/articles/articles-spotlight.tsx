import { SparkleIcon } from '@/components/ui/icons';
import { latestArticles } from '@/data/articles';
import { ArticleListCard } from './article-list-card';

interface ArticlesSpotlightProps {
  /** How many articles to feature in the grid. Defaults to 4. */
  maxItems?: number;
}

export function ArticlesSpotlight({
  maxItems = 4,
}: ArticlesSpotlightProps = {}) {
  const visibleArticles = latestArticles.slice(0, maxItems);

  const columns = visibleArticles.reduce<
    [typeof visibleArticles, typeof visibleArticles]
  >(
    (acc, article, index) => {
      acc[index % 2].push(article);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-r from-secondary to-background p-5 sm:p-10 lg:flex lg:items-center lg:gap-10">
          {/* Intro */}

          <div className="mb-8 flex items-start gap-5 lg:mb-0 lg:w-4/12">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <SparkleIcon className="h-5 w-5" />
            </span>

            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-black text-primary xs:text-2xl">
                از گوشه و اطراف دنیای برنامه‌نویسی
              </h2>

              <p className="text-sm font-semibold leading-8 text-muted xs:text-base">
                نوشتن کار جالبی است که هزاران سال همراه ما بوده و کمک کرده تا
                همیشه به‌روز بمانیم؛ ما در ایده گستران جنوب فضایی فراهم کرده‌ایم
                تا بتوانید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی را در اختیار
                هزاران توسعه‌دهنده عضو این مجموعه قرار دهید.
              </p>
            </div>
          </div>

          {/* Articles */}

          <div className="w-full lg:w-8/12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {columns.map((column, index) => (
                <div key={index} className="space-y-5">
                  {column.map(article => (
                    <ArticleListCard key={article.id} article={article} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
