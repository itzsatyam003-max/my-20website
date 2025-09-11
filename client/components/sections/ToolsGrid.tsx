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
  hasMobileIconBg?: boolean;
};

const TOOLS: Tool[] = [
  {
    title: "BG REMOVED",
    desc: "Quickly edit and annotate PDFs online.",
    Icon: Edit3,
    href: "https://www.remove.bg/",
    targetBlank: true,
    emphasize: true,
    hasMobileIconBg: true,
  },
  { title: "Sign", desc: "eSign documents from anywhere.", Icon: PenTool },
  {
    title: "Request signatures",
    desc: "Send a document for eSignature.",
    Icon: Signature,
  },
  {
    title: "Share",
    desc: "Instantly send PDFs for review and editing.",
    Icon: Share2,
  },
  {
    title: "Find forms online",
    desc: "Browse the online library of forms.",
    Icon: Search,
  },
  { title: "Merge", desc: "Combine multiple PDFs into one.", Icon: GitMerge },
  {
    title: "Rearrange",
    desc: "Rearrange pages in a PDF document.",
    Icon: ArrowUpDown,
  },
  {
    title: "Collaborate",
    desc: "Exchange comments and edit PDFs collaboratively.",
    Icon: Users,
  },
  {
    title: "Compress",
    desc: "Compress PDFs to reduce their size.",
    Icon: FileArchive,
  },
  {
    title: "Convert",
    desc: "Convert PDFs into Word, Excel, JPG, or PPT files and vice versa.",
    Icon: Repeat,
  },
  {
    title: "Create from scratch",
    desc: "Start with a blank page.",
    Icon: FilePlus2,
  },
  { title: "Edit DOC", desc: "Edit Word documents.", Icon: FileText },
];

import { cn } from "@/lib/utils";

export default function ToolsGrid() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map(({ title, desc, Icon, href, targetBlank, emphasize, hasMobileIconBg }) => {
          const CardInner = (
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-md border bg-secondary text-foreground",
                  hasMobileIconBg &&
                    'bg-[url("https://cdn.builder.io/api/v1/image/assets%2F58fdd6e3817b4e5895807a27ed6b349f%2F2912f90ee87f4a2c829321f8558dad94")] bg-center bg-cover lg:bg-none lg:bg-secondary'
                )}
              >
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
              className="h-full min-h-[120px] rounded-xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
            >
              {CardInner}
            </a>
          ) : (
            <div
              key={title}
              className="h-full min-h-[120px] rounded-xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              {CardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
