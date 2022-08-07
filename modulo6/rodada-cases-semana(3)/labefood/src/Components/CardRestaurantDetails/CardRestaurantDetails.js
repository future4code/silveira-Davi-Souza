import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import { BoxInfo, ContainerCard, Inform, Price, StyledImg, StyledName } from "./styled";

const CardRestaurantDetails = ({restaurant}) => {
    const navigate = useNavigate();

    return(
        <ContainerCard onClick={() => goToRestaurant(navigate, restaurant.id)}>
            <StyledImg src={restaurant.logoUrl} alt={`Logo ${restaurant.name}`}/>
            <StyledName>{restaurant.name}</StyledName>
            <Inform>{restaurant.category}</Inform>
            <BoxInfo>
                <Inform>{restaurant.deliveryTime}</Inform>
                <Inform>{restaurant.shipping}</Inform>
            </BoxInfo>
            <Inform>{restaurant.address}</Inform>
        </ContainerCard>
    );
};

export default CardRestaurantDetails;