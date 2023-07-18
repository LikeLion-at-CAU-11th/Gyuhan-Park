import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const signup = async (id, pw, name, age) => {
    return await axios.post(baseUrl, {
        id,
        pw,
        name,
        age,
    });
};
