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
    <div className="container">
      <h2 id="about-heading" className="font-bold text-[15px] text-[#E2230F] lg:text-[30px] lg:leading-[36px] lg:text-foreground">Begusarai CSC — हमारे बारे में</h2>
      <p className="mt-4">
        <strong>Begusarai CSC</strong> में आपका हार्दिक स्वागत है। यहाँ हम Begusarai और आसपास के क्षेत्र के लोगों के लिए डिजिटल सेवाओं और उपयोगी ऑनलाइन टूल्स को आसान और सुलभ बनाते हैं। हमारा उद्देश्य CSC ऑपरेटरों और आम नागरिकों के रोज़मर्रा के कागजी कार्यों को तेज़, सरल और भरोसेमंद बनाना है।
      </p>

      <h3 className="mt-8 text-xl font-semibold">हम जो सेवा देते हैं:</h3>
      <ul className="mt-3 list-disc pl-5 space-y-1">
        <li>PDF एडिटिंग, कन्वर्ज़न और साइज बदलना (Compress, Convert, Edit)</li>
        <li>PAN / Aadhar संबंधित टूल्स और फॉर्म सपोर्ट</li>
        <li>रिज़्यूमे एडिटिंग, QR कोड जनरेशन और इमेज बैकग्राउंड रिमूवल</li>
        <li>दस्तावेज़ जोड़ना, पेज रियरेंज करना आदि</li>
      </ul>

      <h3 className="mt-8 text-xl font-semibold">हमारी खास बात:</h3>
      <ul className="mt-3 list-disc pl-5 space-y-1">
        <li>लोकल फोकस — Begusarai समुदाय की ज़रूरतों के लिए बनाया गया</li>
        <li>सहज इंटरफ़ेस — सरल और उपयोग में आसान</li>
        <li>तेज़ समाधान — समय बचाने वाले टूल्स</li>
        <li>भरोसेमंद — CSC ऑपरेटरों की आवश्यकताओं के अनुरूप</li>
      </ul>

      <h3 className="mt-8 text-xl font-semibold">हमारा मिशन</h3>
      <p className="mt-3">स्थानीय समुदाय को डिजिटल रूप से सशक्त बनाना — ताकि सरकारी और निजी दस्तावेज़ आसानी से, तेज़ और सुरक्षित तरीके से पूरे हो सकें।</p>

      <p className="mt-6">सुझाव या सहायता के लिए <Link to="/contact" className="text-primary underline underline-offset-4">संपर्क पेज</Link> पर जाएँ।</p>
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
