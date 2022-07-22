import styled from "styled-components";

export const StyledCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    margin: 5px;
    line-height: 1.7rem;
    cursor: pointer;

    .movie-title {
        font-weight: bold;
    }

    .movie-date {
        font-weight: bold;
        color: #646464;
    }

    .movie-image {
        width: 200px;
        height: 300px;
        border-radius: 4px;
    }
`