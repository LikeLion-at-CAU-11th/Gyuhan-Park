import React, { useEffect, useState } from "react";
import { getMypage } from "../apis/mypage";

const Mypage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMypage().then((result) => {
            setData(result.data);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>로딩중 ...</div>;

    return (
        <div>
            <h1>My Page</h1>
            {/* <div>{data?.age}</div>
            <div> {data?.name}</div> */}
        </div>
    );
};

export default Mypage;
