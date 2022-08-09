import styled from "styled-components";

export const Main = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 90%;
    height: 22%;
    border: 1px solid black;
    border-radius: 8px;
    padding-left: 1rem;
`

export const Title = styled.h3 `
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: red;
`

export const StyledDate = styled.p `
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
`

export const Price = styled.p `
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
`