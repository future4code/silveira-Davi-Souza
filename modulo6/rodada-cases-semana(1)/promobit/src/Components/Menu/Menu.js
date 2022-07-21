import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const Menu = () => {
    const { data } = useContext(GlobalStateContext);
    const { genre, setGenreId, genreId } = data;

    const setMovieGenre = (id) => {
        let aux = [];
        if(genre.length == 0){
            setGenreId([...genreId, id]);
        }
        else if(genreId.indexOf(id) < 0){
            setGenreId([...genreId, id]);
        }
        else{
            for(let i = 0; i < genreId.length; i++){
                if(genreId[i] == id){
                    aux = [...genreId];
                    aux.splice( i, 1 );
                    setGenreId(aux);
                };
            };
        };
    };

    const genresButtons = genre && genre.map( movieGenre  => {
        return(
            <button key={movieGenre.id} onClick={() => setMovieGenre(movieGenre.id)}>{movieGenre.name}</button>
        );
    });

    return(
        <div>
            {genresButtons ? genresButtons : <p>error</p>}
        </div>
    );
};

export default Menu;