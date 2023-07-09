import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const getNewRefresh = async () => {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

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
