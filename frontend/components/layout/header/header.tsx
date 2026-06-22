import Logo from './logo';

export default function Header() {
  return (
    <header className="relative py-5 z-30">
      <div className="max-w-7xl relative px-4 mx-auto">
        <div className="bg-background rounded-3xl py-3 px-5">
          <div className="flex items-center gap-8 h-20">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5"></div>
            <div className="flex items-center md:gap-5 gap-3 mr-auto"></div>
          </div>
        </div>
        <div className="lg:block hidden bg-primary rounded-b-3xl mx-12">
          <ul className="flex items-center justify-center py-2"></ul>
        </div>
      </div>
    </header>
  );
}
