import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/context";
import { Button } from "../layout/common";
import { emailAtom, isModalAtom, userNameAtom } from "../recoil/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

const Modal = () => {
    const mode = useContext(ThemeContext);
    const navigate = useNavigate();
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const setIsModal = useSetRecoilState(isModalAtom);

    const handleClick = () => {
        setIsModal(false);
        navigate("/mypage");
    };
    return (
        <ModalWrapper>
            <div
                style={{
                    borderBottom: "2px solid black",
                }}
            >
                <h1
                    style={{
                        backgroundColor: `${mode.main}`,
                        margin: 0,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    확인 모달창
                </h1>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: `${mode.sub}`,
                    gap: 20,
                    padding: 20,
                }}
            >
                <div>아이디 : {userName}</div>
                <div>이메일 : {email}</div>
                <div>
                    <Button mode={mode.button} onClick={handleClick}>
                        확인
                    </Button>
                </div>
            </div>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
    position: absolute;
    backgroundcolor: white;
    zindex: 1;
    border: 2px solid black;
    borderradius: 20;
    width: 30vw;
    height: 25vh;
    overflow: hidden;
`;
export default Modal;
