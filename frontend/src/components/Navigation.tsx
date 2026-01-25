import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 pointer-events-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-end h-20 items-center">
          <div className="pointer-events-auto bg-card/80 backdrop-blur-md p-2 rounded-full shadow-lg border border-border/50">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
