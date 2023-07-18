"use client";

import { checkAccessToken } from "@/apis/login";
import { Title, Wrapper } from "@/components/Common";
import { useEffect, useState } from "react";

const MyPage = () => {
    const [data, setData] = useState({
        name: "",
        age: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAccessToken().then((res) => {
            setData(res.data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <div>로딩중 ...</div>;

    return (
        <Wrapper>
            <Title>마이페이지</Title>
            <div>로그인 완료 !</div>
            <div>
                <div>{data.name}</div>
                <div>{data.age}</div>
            </div>
        </Wrapper>
    );
};

export default MyPage;
