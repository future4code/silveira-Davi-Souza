import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { baserUrl, headers } from '../Constants/url';
import { GlobalStateContext } from './GlobalStateContext'

function GlobalState (props) {
    const [ popular, setPopular ] = useState([]);
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        getPopular();
        getMovie();
    },[]);

    const getPopular = () => {
        axios.get(baserUrl("/movie/popular", "&language=pt-BR&page=1"), headers)
            .then(res => {
                setPopular(res.data.results);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const getMovie = () => {
        // axios.get()
    };

    const data = {
        popular,
        movie
    };

    return (
		<GlobalStateContext.Provider value={{data}}>
			{props.children}
		</GlobalStateContext.Provider>
	);
};

export default GlobalState;
