import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMypage } from "../apis/mypage";

const Mypage = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMypage()
            .then((result) => setData(result.data))
            .catch((error) => console.log("refresh token expired!! ", error));
        setIsLoading(false);
    }, []);

    if (isLoading) return <div>로딩중 ...</div>;

    return (
        <div>
            <h1>마이페이지</h1>
            <div>{data?.name}</div>
            <div>{data?.age}</div>
        </div>
    );
};

export default Mypage;
