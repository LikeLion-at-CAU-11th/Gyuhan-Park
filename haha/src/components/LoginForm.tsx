"use client";

import { login } from "@/apis/login";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Form, Input, Inputs } from "./Common";

const LoginForm = () => {
  const router = useRouter();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmitLogin = async (e: any) => {
    e.preventDefault();
    login(id, pw).then((res) => router.push("/mypage"));
    setId("");
    setPw("");
  };
  const handleInputId = (e: any) => {
    setId(e.target.value);
  };
  const handleInputPassword = (e: any) => {
    setPw(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmitLogin}>
      <Inputs>
        <Input placeholder="아이디를 입력하세요" onChange={handleInputId} value={id}></Input>
        <Input
          placeholder="비밀번호를 입력하세요"
          type="password"
          onChange={handleInputPassword}
          value={pw}
        ></Input>
      </Inputs>
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
