"use client";

import { Title, Wrapper } from "@/components/Common";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <LoginForm />
      <Title>
        <Link href="signup">회원가입하기</Link>
      </Title>
    </Wrapper>
  );
};

export default LoginPage;
