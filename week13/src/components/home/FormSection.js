import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/context";
import { Button } from "../../layout/common";
import Form from "./Form";
import { isModalAtom, isSubmitedAtom } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import Modal from "../Modal";

const FormSection = () => {
    const mode = useContext(ThemeContext);
    const navigate = useNavigate();
    const [isSubmited, setIsSubmited] = useRecoilState(isSubmitedAtom);
    const [isModal, setIsModal] = useRecoilState(isModalAtom);

    const handleClick = () => {
        setIsSubmited(true);
        if (!isModal) navigate("/mypage");
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
                <Form type="checkbox" inputType="modal" />
            </div>
            <Button mode={mode.button} onClick={handleClick}>
                제출
            </Button>
            {isSubmited && isModal && <Modal />}
        </>
    );
};

export default FormSection;
