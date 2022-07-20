import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import Movie from "../../Components/Movie/Movie"

const Feed = () => {
    const { data } = useContext(GlobalStateContext)
    const { popular } = data;

    console.log("feed ", popular)

    const movies = popular && popular.map( movie => {
        return(
            <div key={movie.id}>
                <Movie movie={movie}/>
            </div>
        );
    });

    return (
        <div>
            FEEEEEEEEEEEEEED
            {movies}
        </div>
    );
};  

export default Feed;