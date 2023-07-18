import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const login = async (id: string, pw: string) => {
    const result = await axios.post(baseUrl, { id, pw });
    const { accessToken, refreshToken } = result.data.data;
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
};

export const checkAccessToken = async () => {
    const accessToken = localStorage.getItem("access");
    return await axios.get(`${baseUrl}/mypage`, {
        headers: {
            Authorization: accessToken,
        },
    });
};
