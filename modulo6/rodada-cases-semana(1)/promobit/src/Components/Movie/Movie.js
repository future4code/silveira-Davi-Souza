import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToDetails } from "../../Routes/Coordinator";

const Movie = ({movie}) => {
    const { data } = useContext(GlobalStateContext);
    const { movieId, setMovieId } = data;
    const navigate = useNavigate();

    const changeToDetails = (id) => {
        setMovieId(id);
        goToDetails(navigate, `/details`);
    };

    return (
        <div onClick={() => changeToDetails(movie.id)}>
            <h5>{movie.title}</h5>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
        </div>
    );
};

export default Movie;