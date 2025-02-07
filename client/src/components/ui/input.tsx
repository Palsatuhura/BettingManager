import { cn } from "../../lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full px-3 py-2 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
