"use client";
import React, { useRef } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};
 
const LoginContainer = styled.div`
  /* Add any additional styles for the container */
`;

const LoginHeader = styled.div`
  background: linear-gradient(to bottom, #f8fafc, #e2e8f0);
  padding: 0.5rem;
  text-align: center;
  color: #475569;
`;

const ErrorMessage = styled.p`
  background-color: #fee2e2;
  color: #dc2626;
  text-align: center;
  padding: 0.5rem;
`;

const Form = styled.form`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

const CancelLink = styled(Link)`
  width: 7rem;
  border: 1px solid #dc2626;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  color: #dc2626;
  transition: all 0.3s ease;

  &:hover {
    background-color: #dc2626;
    color: white;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #4b5563;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const InputBox = ({ name, labelText, type = "text", onChange }) => (
  <StyledInputBox>
    <Label htmlFor={name}>{labelText}</Label>
    <Input id={name} name={name} type={type} onChange={onChange} />
  </StyledInputBox>
);

const StyledButton = styled.button`
  width: 7rem;
  padding: 0.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

const Login = (props: Props) => {
  const router = useRouter();
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });
    if (!res?.error) {
      router.push(props.callbackUrl ?? "http://localhost:3000");
    }
  };

  return (
    <LoginContainer className={props.className}>
      <LoginHeader>Login Form</LoginHeader>
      {!!props.error && <ErrorMessage>Authentication Failed</ErrorMessage>}
      <Form onSubmit={onSubmit}>
        <InputBox
          name="username"
          labelText="User Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <InputBox
          name="password"
          type="password"
          labelText="Password"
          onChange={(e) => (pass.current = e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <CancelLink href={props.callbackUrl ?? "/"}>Cancel</CancelLink>
        </ButtonContainer>
      </Form>
    </LoginContainer>
  );
};

export default Login;