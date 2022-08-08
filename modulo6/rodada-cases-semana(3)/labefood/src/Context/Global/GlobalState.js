import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [ cart, setCart ] = useState([]);
    const [ restaurant, setRestaurant ] = useState({});

    const addToCart = (product, quantity, newRestaurant) => {
        if(newRestaurant.id === restaurant.id){
            setCart([...cart, {...product, quantity}]);
        }
        else {
            setCart([{...product, quantity}]);
            setRestaurant(newRestaurant);
        };
    };

    const removeToCart = (id) => {
        const index = cart.findIndex( prod => prod.id === id);
        const newCart = [...cart]
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const state = { cart, restaurant }
    const requests = { addToCart, removeToCart }
    const setters = {}

    return (
        <GlobalStateContext.Provider value={{ state, requests, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
};

export default GlobalState;