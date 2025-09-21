import {
  Eraser,
  ScanText,
  Image as ImageIcon,
  Files,
  IdCard,
  Zap,
  FileImage,
  Fingerprint,
  Receipt,
  Repeat,
  QrCode,
  FileText,
  IndianRupee,
  Home,
  BadgeCheck,
} from "lucide-react";

type Tool = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  href?: string;
  targetBlank?: boolean;
  emphasize?: boolean;
  extraCardClassName?: string;
};

const TOOLS: Tool[] = [
  {
    title: "बैकग्राउंड हटाएं",
    desc: "Remove image background instantly.",
    Icon: Eraser,
    href: "https://www.remove.bg/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "छवि से टेक्स्ट",
    desc: "Extract text from images (OCR).",
    Icon: ScanText,
    href: "https://www.imagetotext.info/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "छवि आकार बदलें",
    desc: "Compress or resize images to specific KB/MB.",
    Icon: ImageIcon,
    href: "https://www.resizepixel.com/reduce-image-in-kb",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "पीडीएफ टूल्स",
    desc: "Merge, split, compress, and edit PDFs.",
    Icon: Files,
    href: "https://www.ilovepdf.com/merge_pdf",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "पैन (NSDL)",
    desc: "Apply or update PAN via NSDL portal.",
    Icon: IdCard,
    href: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "तत्काल ई-पैन",
    desc: "Generate Instant e-PAN from Income Tax portal.",
    Icon: Zap,
    href: "https://www.incometax.gov.in/iec/foportal/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "पैन दस्तावेज़ आकार",
    desc: "Resize PAN photo or documents to required size.",
    Icon: FileImage,
    href: "https://pancardresizer.com/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "आधार कार्ड",
    desc: "Download, update, and check Aadhaar services (UIDAI).",
    Icon: Fingerprint,
    href: "https://uidai.gov.in/",
    targetBlank: true,
    emphasize: true,
    extraCardClassName: "max-[991px]:pt-[15px]",
  },
  {
    title: "बिल जनरेटर",
    desc: "Create simple bills and invoices online.",
    Icon: Receipt,
    href: "https://bill-ganrater.netlify.app/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "रूपांतरण",
    desc: "Convert PDF to Word, Excel, JPG, PPT and back.",
    Icon: Repeat,
  },
  {
    title: "क्यूआर कोड टूल",
    desc: "Create QR codes (URL, text, etc.).",
    Icon: QrCode,
    href: "https://qr-code.io/qr?step=1",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "रिज़्यूमे एडिट",
    desc: "Create and edit resume online.",
    Icon: FileText,
    href: "https://resumbycsc.netlify.app/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "आय प्रमाण पत्र",
    desc: "Apply for Income Certificate (Bihar RTPS).",
    Icon: IndianRupee,
    emphasize: true,
  },
  {
    title: "निवास प्रमाण पत्र",
    desc: "Apply for Residence Certificate (Bihar RTPS).",
    Icon: Home,
    href: "https://residence-certificate.netlify.app/",
    emphasize: true,
  },
  {
    title: "जाति प्रमाण पत्र",
    desc: "Apply for Caste Certificate (Bihar RTPS).",
    Icon: BadgeCheck,
    href: "https://serviceonline.bihar.gov.in/getServiceDesc.html?serviceId=4650006",
    targetBlank: true,
    emphasize: true,
  },
];

import { cn } from "@/lib/utils";

export default function ToolsGrid() {
  return (
    <section className="container py-12 md:py-16 max-[991px]:bg-transparent dark:bg-transparent">
      <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map(
          ({
            title,
            desc,
            Icon,
            href,
            targetBlank,
            emphasize,
            extraCardClassName,
          }) => {
            const CardInner = (
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">
                    {emphasize ? (
                      <p>
                        <strong>{title}</strong>
                      </p>
                    ) : (
                      title
                    )}
                  </h3>
                  <p className="mt-1 text-xs text-foreground/70">{desc}</p>
                </div>
              </div>
            );

            return href ? (
              <a
                key={title}
                href={href}
                target={targetBlank ? "_blank" : undefined}
                rel={targetBlank ? "noopener noreferrer" : undefined}
                className={cn(
                  "h-full min-h-[120px] rounded-xl border bg-card/90 dark:bg-card/60 dark:border-neutral-800 max-[991px]:border-white backdrop-blur-sm p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer pointer-events-auto flex",
                  extraCardClassName,
                )}
              >
                {CardInner}
              </a>
            ) : (
              <div
                key={title}
                className={cn(
                  "h-full min-h-[120px] rounded-xl border bg-card/90 dark:bg-card/60 dark:border-neutral-800 max-[991px]:border-white backdrop-blur-sm p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5",
                  extraCardClassName,
                )}
              >
                {CardInner}
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
