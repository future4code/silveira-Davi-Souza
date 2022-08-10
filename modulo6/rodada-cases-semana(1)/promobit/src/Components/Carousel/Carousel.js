import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { StyledCarousel, StyledContainerMain } from "./Styled";
import CardActor from "../CardActor/CardActor";

const Carousel = () => {
    const { data } = useContext(GlobalStateContext);
    const { credits } = data;

    const cast = credits && credits.cast.filter( actor => {
        if(!actor.profile_path){
            return false;
        }
        else{
            return true;
        };
    }).map( actor => {
        return (
            <CardActor key={actor.id} actor={actor}/>
        );
    });

    return (
        <StyledContainerMain>
            <StyledCarousel>
                {cast}
            </StyledCarousel>
        </StyledContainerMain>
    );
};

export default Carousel;