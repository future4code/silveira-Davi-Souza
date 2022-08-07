import React from "react";
import { Image, MenuContainer, MenuContainerSpace } from "./styled";
import home from "../../Assets/home.png";
import cart from "../../Assets/cart.png";
import profile from "../../Assets/profile.png";
import homered from "../../Assets/homered.png";
import cartred from "../../Assets/cartred.png";
import profilered from "../../Assets/profilered.png";
import { goToCart, goToFeed, goToProfile } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";

const Menu = ({page}) => {
    const navigate = useNavigate();

    return (
        <div>
            <MenuContainer>
                {page === "home" ? <Image src={homered}/> : <Image src={home} onClick={() => goToFeed(navigate)}/>}
                {page === "cart" ? <Image src={cartred}/> : <Image src={cart} onClick={() => goToCart(navigate)}/>}
                {page === "profile" ? <Image src={profilered}/> : <Image src={profile} onClick={() => goToProfile(navigate)}/>}
            </MenuContainer>
            <MenuContainerSpace>
            </MenuContainerSpace>
        </div>
    );
};

export default Menu;