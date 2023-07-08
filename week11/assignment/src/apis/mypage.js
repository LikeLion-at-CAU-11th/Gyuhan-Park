import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const getMypage = async () => {
    const token = localStorage.getItem("access");

    return await axios.get(`${baseUrl}/mypage`, {
        headers: {
            Authorization: token,
        },
    });
};
