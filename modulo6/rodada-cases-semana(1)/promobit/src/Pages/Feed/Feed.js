import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import Movie from "../../Components/Movie/Movie";
import Menu from "../../Components/Menu/Menu";
import { StyledContainerBtnPages, StyledContainerMovies, StyledDivPages, StyledMain } from "./styled";

const Feed = () => {
    const { data } = useContext(GlobalStateContext)
    const { popular, page, setPage, genreId, totalPage } = data;

    const movies = popular && popular.filter( (movie) => {
        if(genreId.length == 0){
            return movie;
        }
        else{   
            for(let n = 0; n < genreId.length; n++){
                for(let i = 0; i < movie.genre_ids.length; i++){
                    if(genreId[n] === movie.genre_ids[i]){
                        return movie;
                    };
                };
            };
        };
    }).map( movie => {
        return(
            <div key={movie.id}>
                <Movie movie={movie}/>
            </div>
        );
    });

    const changePage = (numberPage) => setPage(numberPage);

    return (
        <div>
            <Menu/>
            <StyledMain>
                <StyledContainerMovies>
                    {movies.length > 0 ? movies : <p>Não encontrado</p>}
                </StyledContainerMovies>
                <StyledContainerBtnPages>
                    <StyledDivPages>
                        {page === 1 ? <></> : <button className="btn" onClick={() => changePage(1)}>Inicio</button>}
                        <button className="btn" onClick={() => changePage((page))}>{page}</button>
                        <button className="btn" onClick={() => changePage((page + 1))}>{page + 1}</button>
                        <button className="btn" onClick={() => changePage((page + 2))}>{page + 2}</button>
                        <button className="btn" onClick={() => changePage((page + 3))}>{page + 3}</button>
                        <button className="btn" onClick={() => changePage((page + 4))}>{page + 4}</button>
                        <button className="btn" onClick={() => changePage((page + 5))}>{page + 5}</button>
                        <button className="btn" onClick={() => changePage((totalPage))}>Última</button>
                    </StyledDivPages>
                </StyledContainerBtnPages>
            </StyledMain>    
        </div>
    );
};  

export default Feed;