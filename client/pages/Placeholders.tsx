import { Link } from "react-router-dom";

export function Placeholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="container py-14">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="mt-2 text-foreground/70">{description}</p>}
      <div className="mt-6">
        <Link
          to="/"
          className="btn-gradient inline-flex items-center rounded-full px-5 py-2.5 font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export const CreateResume = () => (
  <Placeholder
    title="Create Resume/CV"
    description="This page will contain the full resume builder. Continue prompting to implement it."
  />
);
export const CreateBiodata = () => (
  <Placeholder
    title="Create Biodata"
    description="This page will help you create biodata in minutes."
  />
);
export const FreeCourses = () => (
  <Placeholder
    title="Free Computer Courses"
    description="Curated list of free computer courses and resources."
  />
);
export const About = () => (
  <section id="about" aria-labelledby="about-heading" className="py-12 md:py-16">
    <div className="container space-y-8 md:space-y-10">
      <div className="rounded-xl border bg-white p-6 md:p-10 shadow-sm">
        <h2
          id="about-heading"
          className="font-bold text-[15px] text-[#E2230F] lg:text-[30px] lg:leading-[36px] lg:text-foreground"
        >
          Begusarai CSC — हमारे बारे में
        </h2>
        <p className="mt-4 max-w-3xl text-foreground/80">
          <strong>Begusarai CSC</strong> में आपका हार्दिक स्वागत है। यहाँ हम Begusarai और आसपास के क्षेत्र के लोगों के लिए डिजिटल सेवाओं और उपयोगी ऑनलाइन टूल्स को आसान और सुलभ बनाते हैं। हमारा उद्देश्य CSC ऑपरेटरों और आम नागरिकों के रोज़मर्रा के कागजी कार्यों को त��ज़, सरल और भरोसेमंद बनाना है।
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6">
          <h3 className="text-lg font-semibold">हम जो सेवा देते हैं</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />PDF एडिटिंग, कन्वर्ज़न और साइज बदलना (Compress, Convert, Edit)</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />PAN / Aadhar संबंधित टूल्स और फॉर्म सपोर्ट</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />रिज़्यूमे एडिटिंग, QR कोड जनरेशन और इमेज बैकग्राउंड रिमूवल</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />दस्तावेज़ जोड़ना, ��ेज रियरेंज करना आदि</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <h3 className="text-lg font-semibold">हमारी खास बात</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />लोकल फोकस — Begusarai समुदाय की ज़रूरतों के लिए बनाया गया</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />सहज इंटरफ़ेस — सरल और उपयोग में आसान</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />तेज़ समाधान — समय बचाने वाले टूल्स</li>
            <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />भरोसेमंद — CSC ऑपरेटरों की आवश्यकताओं के अनुरूप</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <h3 className="text-lg font-semibold">हमारा मिशन</h3>
          <p className="mt-3 text-sm text-foreground/80">
            स्थानीय समुदाय को डिजिटल रूप से सशक्त बनाना — ताकि सरकारी और निजी दस्तावेज़ आसानी से, तेज़ और सुरक्षित तरीके से पूरे हो सकें।
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              संपर्क करें
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-primary/5 p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h4 className="text-base font-semibold">क्या आप किसी विशेष दस्तावेज़ में मदद चाहते हैं?</h4>
            <p className="text-sm text-foreground/70">हमसे बात करें या सीधे टूल्स सेक्शन देखें।</p>
          </div>
          <div className="flex gap-3">
            <Link to="/tools" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold">Tools</Link>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export const Privacy = () => (
  <Placeholder
    title="Privacy Policy"
    description="Read about how we protect your data and privacy."
  />
);

export const Features = () => (
  <Placeholder
    title="Features"
    description="Overview of key features (placeholder)."
  />
);
export const Tools = () => (
  <Placeholder
    title="Tools"
    description="Utilities and resources (placeholder)."
  />
);
export const Portfolio = () => (
  <Placeholder
    title="Portfolio"
    description="Showcase your projects (placeholder)."
  />
);
export const Contact = () => (
  <Placeholder
    title="Contact"
    description="Get in touch with us (placeholder)."
  />
);
