import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coodinator";
import { StyledDivHeader } from "./Styled";

const Header = ({ rightButtonText, setRightButtonText }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
    }

    const rightButtonAction = () => {
        if(token){
            logout();
            setRightButtonText("Entrar");
            goToLogin(navigate);
        } 
        else {
            goToLogin(navigate);
        }
    }

    return (
    <StyledDivHeader>
        <div>
            <img/>
        </div>
        <div>
            <button onClick={rightButtonAction}>{ rightButtonText }</button>
        </div>
    </StyledDivHeader>
    );
}

export default Header;