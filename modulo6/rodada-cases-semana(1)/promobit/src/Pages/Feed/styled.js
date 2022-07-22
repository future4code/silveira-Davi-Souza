import styled from "styled-components";

export const StyledMain = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: auto;
    margin-top: 5vh;
`

export const StyledContainerMovies = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 80%;

`

export const StyledContainerBtnPages = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`

export const StyledDivPages = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25%;
    height: 100%;

    .btn {
        background: none;
        border: none;
        font-size: 1.1rem;
        font-weight: bold;
        color: #5C16C5;
    }
`