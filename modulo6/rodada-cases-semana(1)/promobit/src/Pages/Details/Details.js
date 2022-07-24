import React, { useContext, useEffect }  from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { StyledBody, StyledCast, StyledContainerImage, StyledContainerInfo, StyledMainDetails, StyledRecommendations, StyledVideo } from "./styled";
import { useParams } from "react-router-dom";
import { CircularProgressWithLabel, CircularStatic } from "./CircularProgressWithLabel";
import Carousel from "../../Components/Carousel/Carousel";
import Movie from "../../Components/Movie/Movie";


const Details = () => {
    const { data } = useContext(GlobalStateContext);
    const { movie, credits, setMovieId, video, recomendations } = data;
    const { id } = useParams();

    useEffect(() => {
        setMovieId(id);
    },[])
    
    const realeaseDate = () => {
        return movie && movie.release_date.split('-',3);
    };
    
    const movieGenre = () => {
        return movie && movie.genres.map( genre => {
            return(
                ` ${genre.name},`
            );
        });
    };

    const trailer = () => {
        if(video){
            return (
                <a href={`https://www.youtube.com/watch?v=${video[0].key}`} target="_blank">
                    <video
                        poster={`https://img.youtube.com/vi/${video[0].key}/maxresdefault.jpg`}
                    />
                </a>
            );
        };
    };

    const recomendationsMovie = () => {
        return recomendations && recomendations.map((movie, i) => {
            if(i < 5){
                return <Movie movie={movie}/>
            }
        });
    };

    const productors = credits && credits.crew.map( (prod, i) => {
        if(i < 6){
            return (
                <div key={prod.id}>
                    <h3>{prod.name}</h3>
                    <p>{prod.department}</p>
                </div>
            );
        }
    });

    return(
        <div>
            <StyledMainDetails>
                <StyledContainerImage>
                    <img className="movie-image" src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt={movie.path} />
                </StyledContainerImage>
                <StyledContainerInfo>
                    <div className="text">
                        {movie ? <h1>{movie.title} ({realeaseDate()[0]})</h1> : <p>error</p>}
                    </div>
                    <div className="text">
                        { movie ? <p> • {`${realeaseDate()[2]}/${realeaseDate()[1]}/${realeaseDate()[0]}`} • {movieGenre()} • </p> : <p>error</p>}
                    </div>
                    <div className="text-avaliation">
                        {CircularStatic((movie.vote_average * 10))}
                        <p className="user-average">Avaliação dos usuários</p>
                    </div>
                    <div className="text-sinopse">
                        <h2>Sinopse</h2>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="text-productors">
                        {productors}
                    </div>
                </StyledContainerInfo>
            </StyledMainDetails>
            <StyledBody>
                <StyledCast>
                    <h2>Elenco Original</h2>
                    <Carousel/>
                </StyledCast>
                {video.length > 0 ? <StyledVideo>
                    <h2>Trailer</h2>
                    <div className="video-div">
                        {trailer()}
                     </div>
                </StyledVideo> : <></>}
                <StyledRecommendations>
                    <h2>Recomendações</h2>
                    <div className="recommendations">
                        {recomendationsMovie()}
                    </div>
                </StyledRecommendations>
            </StyledBody>
        </div>
    );
};

export default Details