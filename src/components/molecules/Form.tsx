import { Input } from "../atoms/Input";
import { ComponentProps } from "react";

export const Form = ({
  label,
  ...props
}: { label: string } & ComponentProps<"input">) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <Input {...props} />
  </div>
);
