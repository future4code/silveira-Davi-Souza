import React from "react";
import { Main, Price, StyledDate, Title } from "./styled";

const ConvertDate = (timeStamp) => {
    let time = new Date(timeStamp);
    let day = time.getDate().toString().padStart(2,"0");
    let month = ((time.getMonth() + 1).toString().padStart(2, "0"));
    let year = time.getFullYear();

    return `${day}/${month}/${year}`
};

const CardOrderHistory = ({order}) => {
    return (
        <Main>
            <Title>{order.restaurantName}</Title>
            <StyledDate>{ConvertDate(order.createdAt)}</StyledDate>
            <Price>SUBTOTAL {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(order.totalPrice)}</Price>
        </Main>
    );
};

export default CardOrderHistory;