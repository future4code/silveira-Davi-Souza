import React from 'react';
import Styled from 'styled-components'

const Bigcard_container = Styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Image = Styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Descricao = Styled.div`
    margin-bottom: 15px;
`
    
const Nome = Styled.h4`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <Bigcard_container>
            <Image src={ props.imagem } />
            <Descricao>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </Descricao>
        </Bigcard_container>
    )
}

export default CardGrande;