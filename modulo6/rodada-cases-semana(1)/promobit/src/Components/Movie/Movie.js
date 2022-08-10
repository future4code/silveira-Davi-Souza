import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToDetails } from "../../Routes/Coordinator";
import { StyledCard } from "./styled";

const Movie = ({movie}) => {
    const { data } = useContext(GlobalStateContext);
    const { setMovieId } = data;
    const navigate = useNavigate();

    const changeToDetails = (id) => {
        setMovieId(id);
        goToDetails(navigate, `/details/${id}`);
    };

    return (
        <StyledCard onClick={() => changeToDetails(movie.id)}>
            <img className="movie-image" src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt={movie.path} />
            <p className="movie-title">{movie.title}</p>
            <p className="movie-date">{movie.release_date}</p>
        </StyledCard>
    );
};

export default Movie;