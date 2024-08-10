"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center">
      <button
        title={`${theme === "dark" ? "Light" : "Dark"} Mode`}
        className="m-2 flex items-center justify-center rounded-md border-none bg-transparent p-2 outline-0 backdrop-blur-[2px] transition-all duration-300 ease-in-out"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span
          className={`h-6 w-6 rounded-full transition-colors ${theme === "dark" ? "bg-[#ffffff]" : "bg-[#000000]"}`}
        ></span>
      </button>
    </div>
  );
}
