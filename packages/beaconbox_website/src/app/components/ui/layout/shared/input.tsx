import * as React from "react";
import styled from "styled-components";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface ExtendedInputProps extends InputProps {
  startIcon?: "email" | "padlock" | "user";
}

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input<{ startIcon?: string }>`
  flex: 1;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  background-color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  ring-offset-color: white;
  file-border: 0;
  file-background-color: transparent;
  file-font-size: 0.875rem;
  file-font-weight: 500;
  placeholder-color: #94a3b8;
  &:focus-visible {
    outline: none;
    ring: 2px solid #3b82f6;
    ring-offset: 2px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ startIcon }) => startIcon && `padding-left: 3.8rem;`}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.62rem;
`;

const Input = React.forwardRef<HTMLInputElement, ExtendedInputProps>(
  ({ className, startIcon, type, ...props }, ref) => {
    return (
      <InputWrapper>
        <StyledInput
          type={type}
          className={cn(className)}
          startIcon={startIcon}
          ref={ref}
          {...props}
        />
        {startIcon && (
          <IconWrapper>
            <img
              src={
                startIcon === "email"
                  ? "/images/mail_icon.png"
                  : startIcon === "user"
                  ? "/images/user_icon.png"
                  : "/images/lock_icon.png"
              }
            />
          </IconWrapper>
        )}
      </InputWrapper>
    );
  }
);
Input.displayName = "Input";

export { Input };
