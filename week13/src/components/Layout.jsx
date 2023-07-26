import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/context";
import { Button } from "../layout/common";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    emailAtom,
    isModalAtom,
    isSubmitedAtom,
    userNameAtom,
} from "../recoil/atoms";

const Layout = ({ children }) => {
    const context = useContext(ThemeContext);
    const [mode, setMode] = useState(context.blueTheme);

    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmited = useRecoilValue(isSubmitedAtom);

    const handleClick = (e) => {
        const color = e.target.value;
        if (color === "blue") setMode(context.blueTheme);
        if (color === "green") setMode(context.greenTheme);
        if (color === "pink") setMode(context.pinkTheme);
    };

    return (
        <ThemeContext.Provider value={mode}>
            <Wrapper>
                <Header mode={mode.main}>
                    <Button value="blue" onClick={handleClick}>
                        Blue
                    </Button>
                    <Button value="green" onClick={handleClick}>
                        Green
                    </Button>
                    <Button value="pink" onClick={handleClick}>
                        Pink
                    </Button>
                </Header>
                <div>{children}</div>
                <Footer mode={mode.main}>
                    {!isSubmited
                        ? ""
                        : `${userName}의 공간 || 이메일: ${email}`}
                </Footer>
            </Wrapper>
        </ThemeContext.Provider>
    );
};

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Header = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${(props) => props.mode};
`;

export default Layout;
