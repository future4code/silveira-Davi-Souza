import styled from 'styled-components'

export const MainMenu = styled.div `
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    background-color: #212121;
    color: white;
    height: 100vh;
    width: 15vw;
    padding-top: 3%;
    font-size: 1.1rem;
    font-weight: bold;

    .div-options {
        align-items: center;
        width: 80%;
    }

    .div-logo {
        display: flex;
        margin-bottom: 10%;
        font-size: 2rem;
        align-items: center;
        color: #750fff;
        font-style: italic;
        width: 80%;
    }

    .img-logo {
        width: 50px;
        height: 50px;
    }

    button {
        display: flex;
        background: none;
        border: none;
        text-decoration: none;
        align-items: center;
        color: #b8b8b8;
        font-weight: bold;
        font-size: 1.1rem;

        &:hover {
            color: white;
        }
    }


    ul {
        padding-left: 0px;
        margin-left: 0px;
        align-self: center;
        list-style-type: none;
        list-style-position: initial;
    }

    ul li {
        margin-top: 30px;
        
    }

    img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    hr {
        width: 80%;
        height: 1px;
        border: none;
        background-color: grey;
    }
`

