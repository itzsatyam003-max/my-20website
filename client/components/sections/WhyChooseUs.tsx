import { ShieldCheck, Users, Zap, FileText, Globe, Lock } from "lucide-react";

const FEATURES = [
  { title: "100% Free – Government Assisted Services", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "Local Help – CSC Begusarai Support", icon: <Users className="h-5 w-5" /> },
  { title: "Fast Processing – Minimal Waiting", icon: <Zap className="h-5 w-5" /> },
  { title: "Document Assistance – End-to-end help", icon: <FileText className="h-5 w-5" /> },
  { title: "Easy Online Access – From anywhere", icon: <Globe className="h-5 w-5" /> },
  { title: "Secure & Private – Your data is safe", icon: <Lock className="h-5 w-5" /> },
];

export default function WhyChooseUs() {
  return (
    <section className="container py-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">Why use CSC Begusarai?</h2>
        <p className="mt-2 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
          CSC Begusarai offers trusted, government-backed e-services with local
          support and quick processing tailored for residents of Begusarai.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-lg border bg-card/90 dark:bg-card/60 dark:border-neutral-800 p-3 shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted/30 dark:bg-muted/20 text-2xl">
              {f.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-tight font-sans">{f.title}</h3>
              {/* optional short subtitle removed to keep compact look like screenshot */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
