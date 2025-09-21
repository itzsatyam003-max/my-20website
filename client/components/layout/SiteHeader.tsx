import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-black/90 hover:text-black dark:text-white/90 dark:hover:text-white",
          isActive && "text-white underline underline-offset-8 decoration-2",
        )
      }
    >
      {children}
    </NavLink>
  );
}

export default function SiteHeader() {
  return (
    <header className="w-full bg-white text-black shadow dark:bg-black dark:text-white">
      <div className="container flex h-10 items-center justify-between md:h-12 max-[991px]:bg-transparent">
        <div className="text-sm font-extrabold tracking-widest text-black dark:text-white">
          BEGUSARAI
        </div>
        <nav className="flex items-center gap-2 md:gap-4">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/features">Features</NavItem>
          <NavItem to="/tools">Tools</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
