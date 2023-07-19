"use client";

import {
    Wrapper,
    Title,
    Form,
    Inputs,
    Input,
    Button,
} from "@/components/Common";
import Link from "next/link";
import { useState } from "react";
import { login } from "@/apis/login";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export default function Home() {
    const [selectedMenu, setSelectedMenu] = useState(0);

    return (
        <Wrapper>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                    flexBasis: "30%",
                    width: "90vw",
                    height: "90%",
                }}
            >
                <MenuButton
                    onClick={() => setSelectedMenu(0)}
                    clicked={selectedMenu ? 0 : 1}
                >
                    아기사자 정보
                </MenuButton>
                <MenuButton
                    onClick={() => setSelectedMenu(1)}
                    clicked={selectedMenu ? 1 : 0}
                >
                    멋사인 테스트
                </MenuButton>
            </div>
            <div
                style={{
                    display: "flex",
                    flexBasis: "70%",
                    border: "3px solid black",
                    width: "90vw",
                    height: "500px",
                }}
            >
                dasd
            </div>
        </Wrapper>
    );
}

interface IMenu {
    clicked: number;
}

const MenuButton = styled.div<IMenu>`
    display: flex;
    width: 200px;
    height: 100px;
    border-radius: 20px;
    background-color: ${(props) => (props.clicked ? "orange" : "gray")};
    color: white;
    font-size: 25px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
