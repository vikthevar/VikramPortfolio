'use client'

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function SplitText({
  text = "ANIMATA",
  className,
}: {
  text: string;
  className?: string;
}) {
  const [activeIndex, setIndex] = useState<number>();
  const timer = useRef<NodeJS.Timeout>();

  return (
    <div className={cn("relative uppercase select-none", className)}>
      <div className="flex justify-center">
        {text.split("").map((letter, index) => (
          <span
            onMouseEnter={() => {
              if (timer.current) {
                clearTimeout(timer.current);
              }
              setIndex(index);
            }}
            onMouseLeave={() => {
              timer.current = setTimeout(() => {
                setIndex(undefined);
              }, 150);
            }}
            key={index}
            className={cn(
              "relative cursor-pointer inline-block transition-transform duration-300 ease-out",
              {
                "animate-pulse": index === activeIndex,
                "-translate-y-2 scale-110": index === activeIndex,
                "-translate-y-1 scale-105":
                  activeIndex !== undefined &&
                  (index === activeIndex - 1 || index === activeIndex + 1),
              }
            )}
            style={{ 
              marginRight: letter === ' ' ? '0.5em' : '0.05em',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </div>
  );
}