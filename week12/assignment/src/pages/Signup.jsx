import React from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { signup } from "../apis/signup";

const Signup = () => {
    const [userData, setUserData] = useState({
        id: "",
        pw: "",
        name: "",
        age: "",
    });
    const router = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();
        await signup(
            userData.id,
            userData.pw,
            userData.name,
            userData.age
        ).then(() => router("/"));
    };

    return (
        <Wrapper>
            <Title>회원가입하기</Title>
            <Form style={{ flexDirection: "column" }} onSubmit={handleForm}>
                <Inputs>
                    <Input
                        placeholder="아이디"
                        name="id"
                        onChange={handleInput}
                        value={userData.id}
                    ></Input>
                    <Input
                        placeholder="비밀번호"
                        name="pw"
                        type="password"
                        onChange={handleInput}
                        value={userData.pw}
                    ></Input>
                    <Input
                        placeholder="이름"
                        name="name"
                        onChange={handleInput}
                        value={userData.name}
                    ></Input>
                    <Input
                        placeholder="나이"
                        name="age"
                        onChange={handleInput}
                        value={userData.age}
                    ></Input>
                </Inputs>
                <Button>sign up</Button>
            </Form>
        </Wrapper>
    );
};

const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 10px;
    width: 95%;
    height: 5vh;
    margin-top: 20px;
`;

export default Signup;
