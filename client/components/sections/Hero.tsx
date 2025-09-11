import { Link } from "react-router-dom";

function ResumePreviewCard() {
  return (
    <div className="mx-auto w-full max-w-xl rounded-xl border bg-white/90 p-6 shadow-xl ring-1 ring-black/5">
      <div className="flex gap-6">
        <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/70" />
        <div className="flex-1">
          <div className="h-4 w-40 rounded bg-slate-200" />
          <div className="mt-2 h-3 w-64 rounded bg-slate-200" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="h-3 w-full rounded bg-slate-200" />
            <div className="h-3 w-3/4 rounded bg-slate-200" />
            <div className="h-3 w-5/6 rounded bg-slate-200" />
            <div className="h-3 w-2/3 rounded bg-slate-200" />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-md border p-3">
            <div className="h-3 w-3/4 rounded bg-slate-200" />
            <div className="mt-2 h-2 w-full rounded bg-slate-100" />
            <div className="mt-1 h-2 w-5/6 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(199,100%,41%)] via-[hsl(228,66%,33%)] to-[hsl(260,80%,23%)] opacity-10" />
      <div className="container grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Create <span className="text-primary">100% Free</span> Resume & CV
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80">
            Build Professional Resume and CV Effortlessly – Showcase Your Skills, Impress Employers, and Get Hired Faster!
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/create-resume" className="btn-gradient inline-flex items-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg">
              Create Now
            </Link>
            <a href="#steps" className="inline-flex items-center rounded-full border px-6 py-3 text-base font-semibold hover:bg-foreground/5">
              How it works
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border bg-white/70 shadow-xl ring-1 ring-black/5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3db88c248e1149ad94412f9a6b970061%2F284e9ad182ad44c497f104f376077f3f?format=webp&width=800"
              alt="Profile photo"
              className="h-auto w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
