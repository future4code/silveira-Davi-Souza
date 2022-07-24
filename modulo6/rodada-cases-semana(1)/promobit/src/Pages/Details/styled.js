import styled from "styled-components";
import { mainColor } from "../../Constants/colors"

export const StyledMainDetails = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 70vh;
    background-color: ${mainColor};
`

export const StyledContainerImage = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;
    height: 100%;

    .movie-image {
        margin: 30% 10% 0 0;
        width: 65%;
        height: auto;
        border-radius: 5px;
        -webkit-box-shadow: 0px 4px 4px -1px rgba(0,0,0,0.25); 
        box-shadow: 0px 4px 4px -1px rgba(0,0,0,0.25);
    }
`

export const StyledContainerInfo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
    height: 100%;
    color: white;

    .text-avaliation {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 20px;
        width: 25%
        
    }
    
    .user-average{
        margin-left: 15px;
    }

    .text-sinopse {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 20px;
        width: 80%;
        height: 25%;

        p {
            font-size: 1.6vmin;
            margin-top: 1%;
            /* max-width: 100%;
            overflow: hidden;
            text-overflow: clip; */
        }
    }

    .text {
        margin-top: 20px;
        width: 80%;
    }

    .text-productors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 80%;
        height: 25%;
        margin-top: 20px;
    }
`

export const StyledBody = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: fit-content;
    margin-top: 10vh;
`

export const StyledCast = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    height: 450px;
    margin: 6% 0 3% 0;

    h2 {
        margin-bottom: 1.5rem;
    }
`

export const StyledVideo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    height: 65vh;

    .video-div {
        width: 60%;
        height: auto;
        video{
            width: 100%;
        }
    }
`

export const StyledRecommendations = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    height: 60vh;
    margin-top: 2%;

    .recommendations {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    }
`