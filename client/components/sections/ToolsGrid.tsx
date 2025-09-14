import {
  Edit3,
  PenTool,
  Signature,
  Share2,
  Search,
  GitMerge,
  ArrowUpDown,
  Users,
  FileArchive,
  Repeat,
  FilePlus2,
  FileText,
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
    title: "BG REMOVED",
    desc: "Quickly edit and annotate PDFs online.",
    Icon: Edit3,
    href: "https://www.remove.bg/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "IMAGE TEXT",
    desc: "eSign documents from anywhere.",
    Icon: PenTool,
    href: "https://www.imagetotext.info/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "RESIZE IMAGE",
    desc: "Send a document for eSignature.",
    Icon: Signature,
    href: "https://www.resizepixel.com/reduce-image-in-kb",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "PDF TOOLS",
    desc: "Instantly send PDFs for review and editing.",
    Icon: Share2,
    href: "https://www.ilovepdf.com/merge_pdf",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "PAN BY NSDL",
    desc: "Browse the online library of forms.",
    Icon: Search,
    href: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "ISTENT PAN",
    desc: "Combine multiple PDFs into one.",
    Icon: GitMerge,
    href: "https://www.incometax.gov.in/iec/foportal/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "PAN DOCUMENTS",
    desc: "Rearrange pages in a PDF document.",
    Icon: ArrowUpDown,
    href: "https://pancardresizer.com/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "ADDHAR CARD",
    desc: "Exchange comments and edit PDFs collaboratively.",
    Icon: Users,
    href: "https://uidai.gov.in/",
    targetBlank: true,
    emphasize: true,
    extraCardClassName: "max-[991px]:pt-[15px]",
  },
  {
    title: "BILL JANRATER",
    desc: "Compress PDFs to reduce their size.",
    Icon: FileArchive,
    href: "https://bill-ganrater.netlify.app/",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "Convert",
    desc: "Convert PDFs into Word, Excel, JPG, or PPT files and vice versa.",
    Icon: Repeat,
  },
  {
    title: "QR CODE TOOL",
    desc: "Start with a blank page.",
    Icon: FilePlus2,
    href: "https://qr-code.io/qr?step=1",
    targetBlank: true,
    emphasize: true,
  },
  {
    title: "RESUM EDTI",
    desc: "Edit Word documents.",
    Icon: FileText,
    href: "https://resumbycsc.netlify.app/",
    targetBlank: true,
    emphasize: true,
  },
];

import { cn } from "@/lib/utils";

export default function ToolsGrid() {
  return (
    <section className="container py-12 md:py-16 max-[991px]:bg-[#fdf3fa] dark:bg-transparent">
      <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map(({ title, desc, Icon, href, targetBlank, emphasize, extraCardClassName }) => {
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
              className={cn("h-full min-h-[120px] rounded-xl border bg-card/90 dark:bg-card/60 dark:border-neutral-800 backdrop-blur-sm p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer pointer-events-auto flex", extraCardClassName)}
            >
              {CardInner}
            </a>
          ) : (
            <div
              key={title}
              className={cn("h-full min-h-[120px] rounded-xl border bg-card/90 dark:bg-card/60 dark:border-neutral-800 backdrop-blur-sm p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5", extraCardClassName)}
            >
              {CardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
