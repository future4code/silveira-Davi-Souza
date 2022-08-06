import React from "react";
import { BoxInfo, ContainerCard, Price, StyledImg, StyledName } from "./styled";

const CardRestaurant = ({restaurant}) => {
    return(
        <ContainerCard>
            <StyledImg src={restaurant.logoUrl}/>
            <StyledName>{restaurant.name}</StyledName>
            <BoxInfo>
                <Price>{restaurant.deliveryTime}</Price>
                <Price>{restaurant.shipping}</Price>
            </BoxInfo>
        </ContainerCard>
    );
};

export default CardRestaurant;