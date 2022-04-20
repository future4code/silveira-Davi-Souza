import styled from "styled-components";

export const Body = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(180deg, #494949, #2c2b2b);
    margin-left: 15vw;

    button {
        border: none;
        background: none;
        font-weight: bold;
        color: #b8b8b8;

        &:hover {
            color: white;
        }
    }

    .div-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid black;
        width: 200px;
        height: 300px;
        margin: 15px 15px 0 0;
        box-shadow: 1px 2px 5px black;
    }

    .div-card div{
        display: flex;
        height: 100%;
        width: 80%;
        justify-content: space-between;
    }

    img {
        width: 200px;
        height: 180px;
    }

    .img-delete {
        width: 20px;
        height: 20px;
    }
`