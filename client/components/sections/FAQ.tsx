import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Do I need design skills to create a resume?", a: "No. Our builder provides structured sections and clean templates so you can focus on your content." },
  { q: "Can I add a profile photo to my resume?", a: "Yes, you can upload an image and adjust its size and placement depending on the layout." },
  { q: "Do I need to register or sign up to create a resume?", a: "No account required. Start creating right away and download instantly." },
  { q: "Is this service free to use?", a: "Yes. Resume creation and PDF download are completely free." },
  { q: "Can I edit my resume after downloading it?", a: "You can return and make changes anytime and generate a new PDF." },
  { q: "Can I add custom fields, sections or extra information?", a: "Yes. Add custom sections, reorder them, and tailor the resume to the job." },
];

export default function FAQ() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-6 divide-y rounded-xl border bg-white">
          {FAQS.map((f, idx) => (
            <AccordionItem key={f.q} value={`item-${idx}`} className="px-6">
              <AccordionTrigger className="text-left text-base">{ f.q }</AccordionTrigger>
              <AccordionContent className="text-foreground/80">{ f.a }</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
