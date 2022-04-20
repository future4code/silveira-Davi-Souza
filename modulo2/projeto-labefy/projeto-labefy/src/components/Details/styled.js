import styled from "styled-components";

export const Body = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(180deg, #494949, #2c2b2b);
    margin-left: 15vw;

    .div-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        height: 90vh;
        margin-top: 5%;
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
    }

    .video-description {
        display: flex;
        width: 80%;
        height: 20%;
        justify-content: space-around;
        align-items: center;
        color: #b8b8b8;
        hr {
            width: 1px;
            height: 30%;
        }
    }

    .button-delete {
        border: none;
        background: none;
        width: 25px;
        height: 25px;
        img {
            width: 25px;
            height: 25px;
        }
        &:hover{
            border: none;
            background: none;
        }
        &:active{
            border: none;
            background: none;
        }
    }

    

    hr {
        width: 80%;
        height: 1px;
        border: none;
        background-color: grey;
    }
`