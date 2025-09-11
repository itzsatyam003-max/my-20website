export default function Steps() {
  const items = [
    { title: "Create Now!", desc: "Click on the \"Create Now!\" button to begin your resume-building journey.", icon: "👆" },
    { title: "Fill Details", desc: "Enter your personal and professional details to create your resume.", icon: "📋" },
    { title: "Download", desc: "Download your professionally designed resume in PDF format.", icon: "📥" },
  ];
  return (
    <section id="steps" className="container py-16">
      <h2 className="text-center text-3xl font-bold">Create Your Resume in 3 Simple Steps</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-4xl">{it.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
