import styled from "styled-components";

export const MenuContainer = styled.nav `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 3.062rem;
    box-shadow: 0 -1px 3px 0 rgba(0,0,0,0.2), 0 -2px 1px -1px rgba(0,0,0,0.12), 0 -1px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
`

export const Image = styled.img `
    width: 2.2rem;
`

export const MenuContainerSpace = styled.div `
    height: 3.062rem;
`