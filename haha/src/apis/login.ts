import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const login = async (id: string, pw: string) => {
    const result = await axios.post(baseUrl, { id, pw });
    const { accessToken, refreshToken } = result.data.data;
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
};
