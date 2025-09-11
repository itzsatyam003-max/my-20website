import { Edit3, PenTool, Signature, Share2, Search, GitMerge, ArrowUpDown, Users, FileArchive, Repeat, FilePlus2, FileText } from "lucide-react";

type Tool = { title: string; desc: string; Icon: React.ComponentType<{ className?: string }>; };

const TOOLS: Tool[] = [
  { title: "Edit PDF", desc: "Quickly edit and annotate PDFs online.", Icon: Edit3 },
  { title: "Sign", desc: "eSign documents from anywhere.", Icon: PenTool },
  { title: "Request signatures", desc: "Send a document for eSignature.", Icon: Signature },
  { title: "Share", desc: "Instantly send PDFs for review and editing.", Icon: Share2 },
  { title: "Find forms online", desc: "Browse the online library of forms.", Icon: Search },
  { title: "Merge", desc: "Combine multiple PDFs into one.", Icon: GitMerge },
  { title: "Rearrange", desc: "Rearrange pages in a PDF document.", Icon: ArrowUpDown },
  { title: "Collaborate", desc: "Exchange comments and edit PDFs collaboratively.", Icon: Users },
  { title: "Compress", desc: "Compress PDFs to reduce their size.", Icon: FileArchive },
  { title: "Convert", desc: "Convert PDFs into Word, Excel, JPG, or PPT files and vice versa.", Icon: Repeat },
  { title: "Create from scratch", desc: "Start with a blank page.", Icon: FilePlus2 },
  { title: "Edit DOC", desc: "Edit Word documents.", Icon: FileText },
];

export default function ToolsGrid() {
  const STAGGER = [0, 37, 0, 0, 0, 47, 0, -1, 0, 0, 65, 0];
  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map(({ title, desc, Icon }, i) => (
          <div
            key={title}
            className="rounded-xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            style={{ marginTop: STAGGER[i] ? `${STAGGER[i]}px` : undefined }}
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-secondary text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs text-foreground/70">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
