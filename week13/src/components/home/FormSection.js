import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/context";
import { Button } from "../../layout/common";
import Form from "./Form";
import { isSubmitedAtom } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";

const FormSection = () => {
    const mode = useContext(ThemeContext);
    const navigate = useNavigate();
    const setSubmit = useSetRecoilState(isSubmitedAtom);

    const handleClick = () => {
        setSubmit(true);
        navigate("/mypage");
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 10,
                }}
            >
                <Form type="text" inputType="이름" />
                <Form type="email" inputType="이메일" />
            </div>
            <Button mode={mode.button} onClick={handleClick}>
                제출
            </Button>
        </>
    );
};

export default FormSection;
