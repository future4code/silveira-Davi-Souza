import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/Coordinator";
import { StyledDiv, StyledHeader } from "./styed";

const Header = () => {
    return(
        <StyledHeader>
            <StyledDiv>
                <div>
                    <p>TMDB</p>
                </div>
            </StyledDiv>
        </StyledHeader>
    );
};

export default Header;