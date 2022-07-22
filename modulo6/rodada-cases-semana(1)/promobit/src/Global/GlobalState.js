import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { baserUrl, headers } from '../Constants/url';
import { GlobalStateContext } from './GlobalStateContext'

function GlobalState (props) {
    const [ popular, setPopular ] = useState([]);
    const [ movie, setMovie ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ genre, setGenre ] = useState([]);
    const [ genreId, setGenreId ] = useState([]);
    const [ movieId, setMovieId ] = useState(0);
    const [ totalPages, setTotalPages ] = useState(0);

    useEffect(() => {
        getPopular();
        getGenre();
    },[page, genreId]);

    useEffect( () => {
        getMovieById();
    },[movieId]);

    const getPopular = () => {
        axios.get(baserUrl("/movie/popular", `&language=pt-BR&page=${page}`), headers)
            .then(res => {
                console.log(res.data)
                setTotalPages(res.data.total_pages);
                setPopular(res.data.results);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const getGenre = () => {
        axios.get(baserUrl("/genre/movie/list", `&language=pt-BR`), headers)
        .then(res => {
            setGenre(res.data.genres);
        })
        .catch(error => {
            console.log(error.message);
        });
    };

    const getMovieById = () => {
        axios.get(baserUrl(`/movie/${movieId}`, `&language=pt-BR&genreId=28`), headers)
        .then(res => {
            console.log("movie", res.data)
            setMovie(res.data);
        })
        .catch(error => {
            console.log(error.message);
        });
    };

    const data = {
        popular,
        setPopular,
        movie,
        setMovie,
        page,
        setPage,
        genre,
        setGenre,
        genreId,
        setGenreId,
        movieId,
        setMovieId,
        totalPages
    };

    return (
		<GlobalStateContext.Provider value={{data}}>
			{props.children}
		</GlobalStateContext.Provider>
	);
};

export default GlobalState;
