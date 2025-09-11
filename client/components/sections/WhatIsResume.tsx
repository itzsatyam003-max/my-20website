export default function WhatIsResume() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">What is a <span className="text-primary">Resume & CV</span> ?</h2>
          <p className="mt-4 text-foreground/80">
            A resume is a document that outlines an individual's work experience, education, and skills. It is typically used to apply for jobs, internships, and other opportunities and serves as a summary of an individual's qualifications and abilities.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-foreground/80">
            <li>Summarize your experience and skills</li>
            <li>Highlight achievements</li>
            <li>Tailor to each job application</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 shadow">
            <div className="h-full w-full rounded-xl border bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
