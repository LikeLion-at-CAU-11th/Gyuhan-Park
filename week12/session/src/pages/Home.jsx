import React, { useState } from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/common";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../apis/login";

const Home = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const router = useNavigate();

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePassword = (e) => {
        setPw(e.target.value);
    };

    const onClickLoginBtn = async () => {
        await login(id, pw);
        router("/mypage");
    };

    return (
        <Wrapper>
            <Title>로그인하기</Title>
            <Form>
                <Inputs>
                    <Input
                        placeholder="아이디"
                        value={id}
                        onChange={onChangeId}
                    />
                    <Input
                        placeholder="비밀번호"
                        type="password"
                        onChange={onChangePassword}
                    />
                </Inputs>
                <Button onClick={onClickLoginBtn}>Login</Button>
            </Form>
            <Link to="/signup">회원가입하기</Link>
        </Wrapper>
    );
};

const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 10px;
`;

export default Home;
