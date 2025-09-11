import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive ? "text-primary-foreground bg-primary/90" : "text-foreground/80 hover:text-foreground"
      )
    }
  >
    {children}
  </NavLink>
);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">RG</span>
          <span className="text-lg font-semibold tracking-tight">Resume <span className="text-primary">Ground</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/create-resume">Create Resume/CV</NavItem>
          <NavItem to="/create-biodata">Create Biodata</NavItem>
          <NavItem to="/free-computer-courses">Free Computer Courses</NavItem>
          <NavItem to="/about">About Us</NavItem>
        </nav>
        <div className="md:hidden">
          <Link to="/create-resume" className="btn-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow">
            Create Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
