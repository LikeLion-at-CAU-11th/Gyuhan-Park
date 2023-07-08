import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const getRefresh = async () => {
    const refreshToken = localStorage.getItem("refresh");
    const accessToken = localStorage.getItem("access");

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
};
