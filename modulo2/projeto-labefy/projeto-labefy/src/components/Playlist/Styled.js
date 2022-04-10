import styled from "styled-components";

export const Body = styled.body `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin-left: 15vw;
    background-image: linear-gradient(180deg, #494949, #2c2b2b);
    
    div {
        display: flex;
        flex-direction: column;
        width: 80%;
        align-items: center;
    }

    .input {
        border: none;
        box-shadow: 1px 1px 5px #212121;
        background: #555555;
        width: 100%;
        height: 50px;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        border-radius: 10px;
        margin: 1% 0;

        &:focus {
            box-shadow: 1px 1px 5px #212121;
            border: 0 none;
            outline: 0;
        }
    }
    button {
        border: 2px solid #212121;
        width: 200px;
        height: 50px;
        border-radius: 25px;
        background: none;

        &:hover {
            border: 2px solid #262626;
            color: #262626;
        }

        &:active {
            border: 2px solid #323232;
            color: #323232;
        }
    }
`