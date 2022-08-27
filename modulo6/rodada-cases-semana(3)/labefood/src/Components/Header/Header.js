import { ArrowBackIosNew } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToLogin } from "../../Routes/coordinator";
import { ContainerHeader, Title } from "./styled";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({title, back, logout}) => {
    const navigate = useNavigate();

    const logOut = () => {
        window.localStorage.removeItem("token");
        goToLogin(navigate);
    };

    return(
        <ContainerHeader>
            {back && <ArrowBackIosNew onClick={() => goToBack(navigate)}/>}
            <Title>{title}</Title>
            {logout && <LogoutIcon onClick={logOut}/>}
        </ContainerHeader>
    );
};

export default Header;