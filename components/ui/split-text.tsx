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
    <div
      className={cn(
        "relative text-4xl font-bold text-white md:text-5xl lg:text-6xl uppercase",
        className,
      )}
    >
      <div className="flex justify-center">
        {text.split("").map((letter, index) => (
          <div
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
            className="relative cursor-pointer"
            style={{ 
              width: letter === ' ' ? '0.5ch' : 'auto',
              minWidth: letter === ' ' ? '0.5ch' : '0.6ch',
              height: '1.2em',
              overflow: 'hidden'
            }}
          >
            {/* Top half */}
            <div
              className={cn(
                "absolute top-0 left-0 w-full transition-transform duration-300 ease-out",
                {
                  "-translate-y-6": index === activeIndex,
                  "-translate-y-3":
                    activeIndex !== undefined &&
                    (index === activeIndex - 1 || index === activeIndex + 1),
                  "-translate-y-1":
                    activeIndex !== undefined &&
                    (index === activeIndex - 2 || index === activeIndex + 2),
                }
              )}
              style={{ 
                height: '50%',
                overflow: 'hidden'
              }}
            >
              {letter}
            </div>
            {/* Bottom half */}
            <div
              className={cn(
                "absolute bottom-0 left-0 w-full transition-transform duration-300 ease-out",
                {
                  "translate-y-6": index === activeIndex,
                  "translate-y-3":
                    activeIndex !== undefined &&
                    (index === activeIndex - 1 || index === activeIndex + 1),
                  "translate-y-1":
                    activeIndex !== undefined &&
                    (index === activeIndex - 2 || index === activeIndex + 2),
                }
              )}
              style={{ 
                height: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              <span style={{ transform: 'translateY(-50%)' }}>{letter}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}