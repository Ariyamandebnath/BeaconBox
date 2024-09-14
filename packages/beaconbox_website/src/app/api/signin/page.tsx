"use client"
import Login from "./LoginForm";
import React from "react";
import styled from "@emotion/styled";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const StyledLogin = styled(Login)`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SignInPage = (props: Props) => {
  return (
    <PageContainer>
      <StyledLogin
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
    </PageContainer>
  );
};

export default SignInPage;