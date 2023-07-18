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
            error.config.headers.Authorization = result.accessToken;
            return await axios.get(error.config.url, error.config);
        }
    }
};

export const getRefresh = async () => {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");
    const result = await axios.post(
        `${baseUrl}/refresh`,
        { refreshToken },
        { headers: { Authorization: accessToken } }
    );
    return result.data;
};
