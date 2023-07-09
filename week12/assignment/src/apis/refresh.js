import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const getRefresh = async () => {
    const refreshToken = localStorage.getItem("refresh");
    const accessToken = localStorage.getItem("access");
    try {
        const result = await axios.post(
            `${baseUrl}/refresh`,
            { refreshToken },
            {
                headers: {
                    Authorization: accessToken,
                },
            }
        );
        return result.data;
    } catch (error) {
        if (error.response.status === 401) {
            alert("로그인이 필요합니다.");
            window.location.href = "http://localhost:3000";
            return "no refresh";
        }
    }
};
