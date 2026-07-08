import Link from 'next/link';
import Image from 'next/image';
import { GridIcon, ArrowDiagonalIcon } from '@/components/ui/icons';
import type { EnrolledCourse } from '@/data/enrolled-courses';

interface EnrolledCourseCardProps {
  course: EnrolledCourse;
}

/**
 * "Course in progress" card for the dashboard slider — distinct from
 * both `ArticleCard` and `BlogArticleCard`: it shows a completion
 * status pill, chapter/duration stats, instructor, price-or-free
 * label, AND a watched-percentage progress bar with a "ادامه
 * یادگیری" continue button (none of which the article cards have).
 *
 * Server Component — purely presentational, no interactivity.
 */
export function EnrolledCourseCard({ course }: EnrolledCourseCardProps) {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Link href={`/course-detail/${course.id}`} className="block">
          <Image
            src={course.imageSrc}
            alt={course.imageAlt}
            width={400}
            height={260}
            className="w-full max-w-full rounded-3xl object-cover"
          />
        </Link>
        <Link
          href={course.categoryHref}
          className="absolute left-3 top-3 h-11 inline-flex items-center justify-center gap-1 bg-black/20 rounded-full text-white transition-all hover:opacity-80 px-4"
        >
          <GridIcon className="w-6 h-6" />
          <span className="font-semibold text-sm">{course.category}</span>
        </Link>
      </div>

      <div className="bg-background rounded-b-3xl -mt-12 pt-12">
        <div className="bg-gradient-to-b from-background to-secondary rounded-b-3xl space-y-2 p-5 mx-5">
          {course.statusLabel && (
            <div className="flex items-center gap-2">
              <span className="block w-1 h-1 bg-success rounded-full" />
              <span className="font-bold text-xs text-success">
                {course.statusLabel}
              </span>
            </div>
          )}
          <h2 className="font-bold text-sm">
            <Link
              href={`/course-detail/${course.id}`}
              className="line-clamp-1 text-foreground transition-colors hover:text-primary"
            >
              {course.title}
            </Link>
          </h2>
        </div>

        <div className="space-y-3 p-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 text-muted">
              <span className="font-semibold text-xs">
                {course.chaptersLabel}
              </span>
            </div>
            <span className="block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-1 text-muted">
              <span className="font-semibold text-xs">
                {course.durationLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={course.instructor.avatarSrc}
                  alt={course.instructor.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start space-y-1">
                <span className="line-clamp-1 font-semibold text-xs text-muted">
                  مدرس دوره:
                </span>
                <Link
                  href={course.instructor.href}
                  className="line-clamp-1 font-bold text-xs text-foreground hover:text-primary"
                >
                  {course.instructor.name}
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-end justify-center h-14">
              {course.isFree ? (
                <span className="font-black text-xl text-success">رایگان!</span>
              ) : (
                course.priceLabel && (
                  <span className="font-black text-xl text-foreground">
                    {course.priceLabel}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="space-y-3 mt-3">
            <div className="flex flex-col">
              <span className="text-xs text-primary">
                {course.progressPercent}٪ مشاهده شده
              </span>
              <div className="relative w-full h-1.5 bg-border rounded-full overflow-hidden">
                <span
                  className="absolute right-0 h-full bg-primary"
                  style={{ width: `${course.progressPercent}%` }}
                />
              </div>
            </div>
            <Link
              href={course.continueHref}
              className="w-full h-11 inline-flex items-center justify-center gap-1 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 px-4"
            >
              <span className="font-semibold text-sm">ادامه یادگیری</span>
              <ArrowDiagonalIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
