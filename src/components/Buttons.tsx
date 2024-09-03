import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonPropsType = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, ...props }: ButtonPropsType) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
