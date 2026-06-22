import { CartButton } from './cart-button';
import { CategoriesMegaMenu } from './categories-mega-menu';
import Logo from './logo';
import { MainNav } from './main-nav';
import SearchForm from './search-form';
import ThemeToggle from './theme-toggle';
import { UserMenu } from './user-menu';

export default function Header() {
  return (
    <header className="relative py-5 z-30">
      <div className="max-w-7xl relative px-4 mx-auto">
        <div className="bg-background rounded-3xl py-3 px-5">
          <div className="flex items-center gap-8 h-20">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5">
              <CategoriesMegaMenu />
              <SearchForm />
            </div>
            <div className="flex items-center md:gap-5 gap-3 mr-auto">
              <ThemeToggle />
              <CartButton itemCount={2} />
              <UserMenu />
            </div>
          </div>
        </div>
        <MainNav />
      </div>
    </header>
  );
}
