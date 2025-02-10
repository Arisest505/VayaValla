import { cn } from "@/utils/utils";

type ButtonProps = {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2",
        variant === "primary" && "bg-primary hover:bg-primary/90 text-white",
        variant === "outline" && "border bg-background border-primary text-primary hover:bg-primary hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
