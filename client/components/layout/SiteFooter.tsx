import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-gradient-to-r from-pink-50 to-purple-50 dark:bg-none dark:bg-neutral-900">
      <div className="container py-12 grid gap-8 md:grid-cols-4 max-[991px]:pb-[50px] dark:max-[991px]:bg-black">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
              <span>csc</span>
            </span>
            <span className="text-lg font-semibold tracking-tight">
              <span>begusarai</span>
            </span>
          </div>
          <p className="mt-4 text-sm font-semibold text-foreground/80 max-w-xs">
            यहां CSC से जुड़े सभी का���ों के लिए टूल उपलब्ध हैं
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-primary" to="/">
                Home Page
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/tools">
                Tolls
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Important</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-primary" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              href="#"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              href="#"
              aria-label="YouTube"
            >
              ▶
            </a>
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              href="#"
              aria-label="Instagram"
            >
              ◎
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container py-6 text-xs text-foreground/70 dark:text-slate-200/70 dark:max-[991px]:bg-black">
          © 2025 ResumeGround. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
