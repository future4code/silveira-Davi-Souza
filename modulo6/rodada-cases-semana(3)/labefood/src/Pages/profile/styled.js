import styled from "styled-components";

export const Main = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Profile = styled.div `
    text-align: center;
    height: 5%;
    border-bottom: 1px solid black;
`

export const Inform = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const ProfilePerson = styled.div `
    height: 15%;
    display: flex;
    justify-content: space-between;

    div:nth-child(1) {
        width: 80%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    div:nth-child(2) {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
    }
`

export const Address = styled.div `
    height: 10%;
    background-color: #EEEEEE;
    display: flex;
    justify-content: space-between;

    div:nth-child(1) {
        width: 80%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    div:nth-child(2) {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
    }

    h4 {
        color: #B8B8B8;
    }
`

export const MainHistory = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;

    div {
        width: 100%;
        padding: 0 0 0.5rem 1.2rem;
        font-weight: bold;
    }

    hr {
        border: none;
        background-color: black;
        width: 90%;
        height: 1px;
    }
`

export const History = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 0 0 0;
    height: 70%;
`