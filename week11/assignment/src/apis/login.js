import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const login = async (id, pw) => {
    const result = await axios.post(baseUrl, {
        id,
        pw,
    });
    console.log(result.data.data);
    localStorage.setItem("access", result.data.data.accessToken);
    localStorage.setItem("refresh", result.data.data.refreshToken);
};
