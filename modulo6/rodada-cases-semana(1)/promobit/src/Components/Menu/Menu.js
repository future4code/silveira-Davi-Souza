import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { StyledButton, StyledContainterButtons, StyledDivButtons, StyledMain, StyledText, StyledTxt } from "./styled";

const Menu = () => {
    const { data } = useContext(GlobalStateContext);
    const { genre, setGenreId, genreId } = data;
    const [ nameButton, setNameButton ] = useState("button");

    const setMovieGenre = (id) => {
        nameButton == "button" ? setNameButton("activeButton") : setNameButton("button");

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
            <button className={nameButton} key={movieGenre.id} onClick={() => setMovieGenre(movieGenre.id)}>{movieGenre.name}</button>
        );
    });

    return(
        <StyledMain>
            <StyledText>
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já</h1>
            </StyledText>
            <StyledDivButtons>
                <StyledTxt>
                    <p>FILTRE POR:</p>
                </StyledTxt>
                <StyledContainterButtons>
                    {genresButtons ? genresButtons : <p>error</p>}
                </StyledContainterButtons>
            </StyledDivButtons>
        </StyledMain>
    );
};

export default Menu;