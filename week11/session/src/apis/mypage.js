import axios from "axios";
import { getNewRefresh } from "./refresh";

// const baseUrl = "http://front.cau-likelion.org";
const baseUrl = "http://192.168.153.1:8080";

export const getMypage = async () => {
    const token = localStorage.getItem("access");
    try {
        return await axios.get(`${baseUrl}/mypage`, {
            headers: {
                Authorization: token,
            },
        });
    } catch (error) {
        if (error.response.status === 401) {
            // refresh token 을 이용햇 access token 재발급
            const result = await getNewRefresh();
            console.log("result:", result);
            error.config.headers.Authorization = result.accessToken;
            return (await axios.get(error.config.url, error.config)).data;
        }
    }
};
