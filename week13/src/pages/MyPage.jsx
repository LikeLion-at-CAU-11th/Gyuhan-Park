import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import { Button, Title, Wrapper } from "../layout/common";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { emailAtom, isSubmitedAtom, userNameAtom } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const mode = useContext(ThemeContext);
    const resetName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmitedAtom);
    const navigate = useNavigate();
    const userName = useRecoilValue(userNameAtom);

    const handleDelete = () => {
        resetName();
        resetEmail();
        reset();
        navigate("/");
    };

    return (
        <Wrapper>
            <Title>welcome {userName} !!!</Title>
            <Button mode={mode.button} onClick={handleDelete}>
                리셋
            </Button>
        </Wrapper>
    );
};

export default MyPage;