import ModeToggle from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3] relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f5f5f5] px-5 dark:bg-black sm:px-10">
      <ModeToggle />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div>InvoceAI</div>
    </main>
  );
}
