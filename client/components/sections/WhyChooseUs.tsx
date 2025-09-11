const FEATURES = [
  { title: "100% Free – No hidden charges", icon: "💯" },
  { title: "Easy to Use – Simple steps, no technical skills", icon: "⚡" },
  { title: "Simple Customization – Personalize easily", icon: "🎨" },
  { title: "Fast & Reliable – Generate with a few clicks", icon: "🚀" },
  { title: "Instant Download – PDF in seconds", icon: "📥" },
  { title: "Secure & Private – Data not stored", icon: "🔒" },
];

export default function WhyChooseUs() {
  return (
    <section className="container py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="mt-2 text-foreground/70">Our resume maker is designed to be fast, easy, and completely free to use.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-4xl">{f.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
