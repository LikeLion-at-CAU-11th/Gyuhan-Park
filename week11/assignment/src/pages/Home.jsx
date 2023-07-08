import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { Link } from "react-router-dom";
import { login } from "../apis/login";

const Home = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleInputId = (e) => {
        setId(e.target.value);
    };

    const handleInputPassword = (e) => {
        setPw(e.target.value);
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        await login(id, pw);
        setId("");
        setPw("");
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
            <Link to="mypage">회원가입하기</Link>
        </Wrapper>
    );
};

const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 10px;
`;

export default Home;
