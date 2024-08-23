import Hero from "@/components/Hero";
import ModeToggle from "@/components/mode-toggle";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <main className="dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3] relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f5f5f5] px-5 dark:bg-black sm:px-10">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <Spotlight
        fill="white"
        className="-left-0 top-40 md:-top-20 md:left-60"
      />
      <div className="absolute right-2 top-2">
        <ModeToggle />
      </div>
      <Hero />
    </main>
  );
}
