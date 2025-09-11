import Hero from "@/components/sections/Hero";
import Steps from "@/components/sections/Steps";
import WhatIsResume from "@/components/sections/WhatIsResume";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";

export default function Index() {
  return (
    <main>
      <Hero />
      <Steps />
      <WhatIsResume />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}
