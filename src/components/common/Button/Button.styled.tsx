import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string; margin?: string }>`
  padding: 7px 10px;
  outline: none;
  background: ${({ variant }) =>
    variant === "contained" ? "#7900ff" : "none"};
  border: 2px solid #7900ff;
  color: ${({ variant }) => (variant === "outlined" ? "#7900ff" : "#CFFFDC")};
  cursor: pointer;
  margin: ${({ margin }) => (margin ? margin : 0)};

  &:hover {
    background: #cfffdc;
    color: #0f0e11;
  }
`;
