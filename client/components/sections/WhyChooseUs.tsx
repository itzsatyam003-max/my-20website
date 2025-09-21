const FEATURES = [
  { title: "100% Free – Government Assisted Services", icon: "💯" },
  { title: "Local Help – CSC Begusarai Support", icon: "🤝" },
  { title: "Fast Processing – Minimal Waiting", icon: "⚡" },
  { title: "Document Assistance – End-to-end help", icon: "📄" },
  { title: "Easy Online Access – From anywhere", icon: "🌐" },
  { title: "Secure & Private – Your data is safe", icon: "🔒" },
];

export default function WhyChooseUs() {
  return (
    <section className="container py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why use CSC Begusarai?</h2>
        <p className="mt-2 text-foreground/70">
          CSC Begusarai offers trusted, government-backed e-services with local
          support and quick processing tailored for residents of Begusarai.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <div className="text-4xl">{f.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
