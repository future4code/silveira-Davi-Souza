import styled from "styled-components";
import { ReactComponent as Clock } from "../../Assets/clock.svg";

export const OrderContainer = styled.nav `
    display: flex;
    align-items: center;
    height: 7.375rem;
    position: fixed;
    bottom: 3.05rem;
    width: 100%;
    background-color: #E8222E;
    z-index: 2;
    padding: 0 0 0 2rem;
`

export const OrderContainerSpace = styled.div `
    height: 7.375rem;
`

export const ClockStyled = styled(Clock) `
    width: 10%;
    height: auto;
    fill: white;
    margin-right: 1.2rem;
`

export const BoxInform = styled.div `
    
`

export const Title = styled.h3 `
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #fff;
    padding: 0.25rem;
`

export const RestaurantName = styled.p `
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
    padding: 0.25rem;
`

export const TotalPrice = styled.p `
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
    padding: 0.25rem;
`
