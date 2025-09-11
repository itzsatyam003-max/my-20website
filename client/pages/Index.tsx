import ToolsGrid from "@/components/sections/ToolsGrid";

export default function Index() {
  return (
    <main>
      <section className="w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F3db88c248e1149ad94412f9a6b970061%2Fc44e56cc9792436fb1792d520e44368b"
          alt="Begusarai banner"
          className="block h-auto w-full"
          loading="eager"
        />
      </section>
      <ToolsGrid />
    </main>
  );
}
