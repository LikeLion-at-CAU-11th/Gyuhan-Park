import { login } from "@/apis/login";
import {
    Button,
    Form,
    Input,
    Inputs,
    Title,
    Wrapper,
} from "@/components/Common";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const router = useRouter();

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
};

export default LoginPage;
