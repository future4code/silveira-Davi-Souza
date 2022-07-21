import React, { useContext }  from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const Details = () => {
    const { data } = useContext(GlobalStateContext);
    const { movie } = data;

    console.log(movie);

    return(
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.tagline}</p>
        </div>
    );
};

export default Details