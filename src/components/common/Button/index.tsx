import * as React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  btnText: string;
  variant: string;
  margin?: string;
  post?: {
    id: string;
    text: string;
  };
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  variant,
  margin,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} margin={margin} onClick={onClick}>
      {btnText}
    </StyledButton>
  );
};

export default Button;
