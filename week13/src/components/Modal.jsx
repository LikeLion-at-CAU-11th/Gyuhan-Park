import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/context";
import { Button } from "../layout/common";

const Modal = () => {
    const mode = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div style={{ display: "absolute" }}>
            <div>
                <h1>확인 모달창</h1>
            </div>
            <div>
                <div>아이디 : </div>
                <div>이메일 : </div>
            </div>
            <Button mode={mode.button} onClick={() => navigate("/mypage")}>
                확인
            </Button>
        </div>
    );
};

export default Modal;
