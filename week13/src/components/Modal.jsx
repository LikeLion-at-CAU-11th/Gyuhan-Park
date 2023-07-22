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
            <ModalHeader>
                <ModalTitle mode={mode.main}>확인 모달창</ModalTitle>
            </ModalHeader>
            <ModalBody mode={mode.sub}>
                <div>아이디 : {userName}</div>
                <div>이메일 : {email}</div>
                <div>
                    <Button mode={mode.button} onClick={handleClick}>
                        확인
                    </Button>
                </div>
            </ModalBody>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
    position: absolute;
    background-color: white;
    zindex: 1;
    border: 2px solid black;
    border-radius: 20;
    width: 30vw;
    height: 25vh;
    overflow: hidden;
`;

const ModalHeader = styled.div`
    border-bottom: 2px solid black;
`;

const ModalTitle = styled.h1`
    background-color: ${(props) => props.mode};
    margin: 0;
    display: flex;
    justify-content: center;
`;
const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80%;
    background-color: ${(props) => props.mode};
    gap: 20;
    padding: 20;
`;

export default Modal;
