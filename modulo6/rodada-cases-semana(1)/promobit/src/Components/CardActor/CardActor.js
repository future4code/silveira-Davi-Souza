import React from "react";
import { StyledCard } from "./Styled";

const CardActor = ({actor}) => {

    return (
        <StyledCard>
            <img className="actor-image" src={"https://image.tmdb.org/t/p/original" + actor.profile_path} alt={actor.name} />
            <div>
                <h3 className="actor-name">{actor.name}</h3>
                <p>{actor.character}</p>
            </div>
        </StyledCard>
    );
};

export default CardActor;