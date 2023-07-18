import axios, { AxiosError } from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const login = async (id: string, pw: string) => {
    const result = await axios.post(baseUrl, { id, pw });
    const { accessToken, refreshToken } = result.data.data;
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
};

export const checkAccessToken = async () => {
    try {
        const accessToken = localStorage.getItem("access");
        return await axios.get(`${baseUrl}/mypage`, {
            headers: {
                Authorization: accessToken,
            },
        });
    } catch (error: any) {
        if (error.response.status === 401) {
            const result = await getRefresh();
            console.log("access token 만료 !");
            if (result === "refresh 토큰이 만료되었습니다.") {
                alert("로그인이 필요합니다.");
                window.location.assign("/");
            }
            error.config.headers.Authorization = result.accessToken;
            return await axios.get(error.config.url, error.config);
        }
    }
};

export const getRefresh = async () => {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    return await axios
        .post(
            `${baseUrl}/refresh`,
            { refreshToken },
            { headers: { Authorization: accessToken } }
        )
        .then((res) => res.data)
        .catch((error) => {
            if (error.response.status === 401) {
                return error.response.data.message;
            }
        });
};
