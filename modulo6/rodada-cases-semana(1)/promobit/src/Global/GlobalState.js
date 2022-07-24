import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { baserUrl, headers } from '../Constants/url';
import { GlobalStateContext } from './GlobalStateContext'

function GlobalState (props) {
    const [ popular, setPopular ] = useState([]);
    const [ movie, setMovie ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ genre, setGenre ] = useState([]);
    const [ genreId, setGenreId ] = useState([]);
    const [ movieId, setMovieId ] = useState(0);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ credits, setCredits ] = useState(false);
    const [ video, setVideo ] = useState(false);
    const [ recomendations, setRecomendations ] = useState(false);

    useEffect(() => {
        getPopular();
        getGenre();
    },[page, genreId]);

    useEffect( () => {
        if(movieId !== 0){
            getMovieById();
            getCreditsMovie();
            getVideoMovie();
            getRecomendationsMovie();
        };
    },[movieId]);

    const getPopular = () => {
        axios.get(baserUrl("/movie/popular", `&language=pt-BR&page=${page}`), headers)
            .then(res => {
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

    const getMovieById = async () => {
        try {
            const res = await axios.get(baserUrl(`/movie/${movieId}`, `&language=pt-BR`), headers)

            setMovie(res.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getCreditsMovie = async () => {
        try {
            const res = await axios.get(baserUrl(`/movie/${movieId}/credits`, `&language=pt-BR`), headers)

            setCredits(res.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getVideoMovie = async () => {
        try {
            const res = await axios.get(baserUrl(`/movie/${movieId}/videos`, `&language=pt-BR`), headers)

            setVideo(res.data.results);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getRecomendationsMovie = async () => {
        try {
            const res = await axios.get(baserUrl(`/movie/${movieId}/similar`, `&language=pt-BR`), headers)

            setRecomendations(res.data.results);
        } catch (error) {
            console.log(error.message);
        }
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
        totalPages,
        credits,
        video,
        recomendations
    };

    return (
		<GlobalStateContext.Provider value={{data}}>
			{props.children}
		</GlobalStateContext.Provider>
	);
};

export default GlobalState;
