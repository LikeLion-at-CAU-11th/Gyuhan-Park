"use client";

import {
    Wrapper,
    Title,
    Form,
    Inputs,
    Input,
    Button,
} from "@/components/Common";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
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
        <Wrapper>
            <Title>로그인하기</Title>
            <Form onSubmit={handleSubmitLogin}>
                <Inputs>
                    <Input
                        placeholder="아이디를 입력하세요"
                        onChange={handleInputId}
                        value={id}
                    ></Input>
                    <Input
                        placeholder="비밀번호를 입력하세요"
                        type="password"
                        onChange={handleInputPassword}
                        value={pw}
                    ></Input>
                </Inputs>
                <Button>Login</Button>
            </Form>
            <Title>
                <Link href="signup">회원가입하기</Link>
            </Title>
        </Wrapper>
    );
}
