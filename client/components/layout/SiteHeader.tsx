import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-white/90 hover:text-white max-[991px]:text-black dark:max-[991px]:text-white",
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
    <header className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-rose-500 text-white shadow dark:bg-none dark:bg-neutral-900">
      <div className="container flex h-10 items-center justify-between md:h-12 max-[991px]:bg-[#fdf3fa] dark:max-[991px]:bg-transparent">
        <div className="text-sm font-extrabold tracking-widest max-[991px]:text-black dark:max-[991px]:text-white">BEGUSARAI</div>
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
