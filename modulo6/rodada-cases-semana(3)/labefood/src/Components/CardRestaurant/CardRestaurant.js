import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import { BoxInfo, ContainerCard, Price, StyledImg, StyledName } from "./styled";

const CardRestaurant = ({restaurant}) => {
    const navigate = useNavigate();

    return(
        <ContainerCard onClick={() => goToRestaurant(navigate, restaurant.id)}>
            <StyledImg src={restaurant.logoUrl} alt={`Logo ${restaurant.name}`}/>
            <StyledName>{restaurant.name}</StyledName>
            <BoxInfo>
                <Price>{restaurant.deliveryTime}</Price>
                <Price>{restaurant.shipping}</Price>
            </BoxInfo>
        </ContainerCard>
    );
};

export default CardRestaurant;