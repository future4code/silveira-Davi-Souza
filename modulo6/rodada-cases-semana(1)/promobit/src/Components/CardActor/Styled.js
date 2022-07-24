import styled from "styled-components";

export const StyledCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    height: 380px;
    margin: 4px;
    border-radius: 5px;
    background-color: white;
    -webkit-box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.5); 
    box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.5);

    div {
        width: 100%;
        padding-left: 8px;
    }

    .actor-image {
        margin: 8px;
        width: 200px;
        height: auto;
        border-radius: 5px;
        
    }
`