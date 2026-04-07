import { ComponentProps } from "react";

export const Button = ({ children, ...props }: ComponentProps<"button">) => (
  <button
    className="
        w-full
        bg-blue-600 hover:bg-blue-700
        text-white
        font-medium
        py-2.5
        rounded-lg
        shadow-sm
        transition
      "
    {...props}
  >
    {children}
  </button>
);
