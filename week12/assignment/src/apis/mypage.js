import axios from "axios";
import { getRefresh } from "./refresh";

const baseUrl = "http://front.cau-likelion.org";

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
            // 리프레쉬 토큰을 이용하여 액세스 토큰 발급받기
            console.log("access token is expired!!!");
            const result = await getRefresh();
            if (result !== "no refresh") {
                error.config.headers.Authorization = result.accessToken;
                return await axios.get(error.config.url, error.config);
            }
        }
    }
};
