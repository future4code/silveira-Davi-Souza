import styled from "styled-components";

export const MainDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;

    .div1{
        width: 100%;
        height: 90vh;
    }

    .div2{
        width: 100%;
        height: 10vh;
    }

    .div-border {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .div-control{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: 10px;
        width: 400px;
        height: 98%;
        margin-top: 2%;

        hr {
            width: 99%;
        }

        .div-imagem-controle {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            width: 90%;
            height: 500px;

            .div-imagem {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                background-image: url(https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/cropped-loki-1.jpg);
                z-index: 2;
                width: 100%;
                height: 95%;

                .imagem {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 80%; 
                }
            }   
        }
        

        .div-descricao {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 8%;
            color: white;

            .text {
                font-size: 0.8rem;
                width: 45%;
            }
        }

        .div-menu {
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 10%;

        }
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border: none;
        background: none;
    }

    .button-img {
        width: 50px;
        height: 50px;
    }
`