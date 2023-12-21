import React from "react";
import logo from "../../../assets/logo.png";
import {HeaderStyled, Logo} from "./styled";
import {Basket} from "../../tool/basket";

export const Header = () => {
    return <>
        <HeaderStyled>
            <Logo src={logo} alt=""/>
            <Basket />
        </HeaderStyled>
    </>
}
