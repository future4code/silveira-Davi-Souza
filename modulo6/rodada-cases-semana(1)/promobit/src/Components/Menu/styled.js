import styled from "styled-components";

export const StyledMain = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 70vh;
    background-color: #2D0C5D;
`

export const StyledText = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 50%;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    padding: 0 16% 0 16%;
`

export const StyledDivButtons = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50%;
`

export const StyledTxt = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
`

export const StyledContainterButtons = styled.div `
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 40%;

    .button {
        width: fit-content;
        height: auto;
        padding: 10px 20px;
        outline: none;
        border: none;
        font-weight: bold;
        margin: 5px;
        border-radius: 5px;
        background-color: white;
    }

    .activeButton {
        width: fit-content;
        height: auto;
        padding: 10px 20px;
        outline: none;
        border: none;
        font-weight: bold;
        margin: 5px;
        border-radius: 5px;
        background-color: #D18000;
    }
`

export const StyledButton = styled.button `
    width: fit-content;
    height: auto;
    padding: 10px 20px;
    outline: none;
    border: none;
    font-weight: bold;
    margin: 5px;
    border-radius: 5px;
    background-color: ${props => props.theme ? "white" : "yellow"};

    &:hover {
        background-color: #f1f1f1;
    }
`

export const StyledButtonActive = styled.button`
    width: fit-content;
    height: auto;
    padding: 10px 20px;
    outline: none;
    border: none;
    font-weight: bold;
    margin: 5px;
    border-radius: 5px;
    background-color: yellow;

    &:hover {
        background-color: #f1f1f1;
    }
`