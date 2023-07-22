import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userNameAtom, emailAtom, isSubmitedAtom } from "../../recoil/atoms";

const Form = ({ type, inputType }) => {
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const [email, setEmail] = useRecoilState(emailAtom);
    const isSubmited = useSetRecoilState(isSubmitedAtom);

    const onChange = (e) => {
        const data = e.target.value;
        if (inputType === "이름") setUserName(data);
        if (inputType === "이메일") setEmail(data);
    };

    return (
        <div style={{ display: "flex", gap: 10 }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "50px",
                }}
            >
                {inputType}
            </div>
            <input type={type} onChange={onChange} />
        </div>
    );
};

export default Form;