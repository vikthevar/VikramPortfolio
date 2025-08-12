import { cn } from "@/lib/utils";

interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The duration of the animation.
   * @default "8s"
   */
  duration?: string;
  contentClassName?: string;
  trailColor?: string;
  trailSize?: "sm" | "md" | "lg";
}

const sizes = {
  sm: 5,
  md: 10,
  lg: 20,
};

export default function AnimatedBorderTrail({
  children,
  className,
  duration = "5.33s",
  trailColor = "rgba(255, 255, 255, 0.3), rgba(156, 163, 175, 0.2)",
  trailSize = "md",
  contentClassName,
  ...props
}: AnimatedTrailProps) {
  return (
    <div
      {...props}
      className={cn("relative h-fit w-fit overflow-hidden rounded-lg bg-transparent p-px", className)}
    >
      <div
        className="absolute inset-0 h-full w-full animate-trail opacity-100"
        style={{
          "--duration": duration ?? "5.33s",
          "--angle": "0deg",
          background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${100 - sizes[trailSize]}%, ${trailColor})`,
        } as React.CSSProperties}
      />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[7px] bg-black/80 backdrop-blur-sm border border-white/10",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}