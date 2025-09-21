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
        <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">बेगुसराई</h2>
        <p className="mt-2 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
          why chose us csc Begusarai offers trusted, government-backed e-services
          with local support and quick processing tailored for residents of
          Begusarai.
        </p>
      </div>

      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-lg border border-[rgb(38,38,38)] bg-black/60 p-3 shadow-sm"
          >
            <div className="text-foreground">
              {f.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-tight font-sans text-white">{f.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
