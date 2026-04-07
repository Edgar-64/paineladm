import { ComponentProps } from "react";

export const Input = ({ ...props }: ComponentProps<"input">) => (
  <input
    className="
        w-full
        border border-gray-300
        rounded-lg
        px-3 py-2
        text-sm
        bg-white
        transition
      "
    {...props}
  />
);
