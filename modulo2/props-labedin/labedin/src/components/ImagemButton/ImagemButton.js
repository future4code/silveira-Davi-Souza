import React from 'react';
import Styled from 'styled-components'

const Image_button_container = Styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    text-decoration: none;
`

const Image = Styled.img`
    width: 30px;
    margin-right: 10px;
`

const Link = Styled.a `
    color: #212121;
    text-decoration: none;
`

function ImagemButton(props) {
    return (
        <Link href={ props.link } target="_blank"><Image_button_container>
            <Image src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Image_button_container>
        </Link>

    )
}

export default ImagemButton;