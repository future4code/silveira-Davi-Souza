import styled from "styled-components";

export const StyledContainerMain = styled.div `
    position: static;
    width: 100%;
    height: 410px;
`

export const StyledCarousel = styled.div `
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    height: 410px;

    &::-webkit-scrollbar {
        border-radius: 5px;       
        height: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #DDDDDD;        
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ADADAD;    
        border-radius: 5px;       
        border: none;  
    }
`