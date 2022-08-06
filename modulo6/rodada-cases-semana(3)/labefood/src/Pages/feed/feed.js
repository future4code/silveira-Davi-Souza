import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { CardsRestaurants, Containerfeed, InputBox, Menu, MenuItem, Search } from "./styled";

const Feed = () => {
    useProtectedPage();

    const [ restaurants, setRestaurants ] = useState();
    const [ inputText, setInputText ] = useState("");
    const [ category , setCategory ] = useState([]);
    const [ valueCategory, setValueCategory ] = useState("");

    const getRestaurants = async () => {
        const token = localStorage.getItem("token");

        await axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: token
            }
        })
            .then( res => {
                console.log(res.data)
                setRestaurants(res.data.restaurants);
                filterCategory(res.data.restaurants);
            })
            .catch( error => {
                alert(error.response.data.message);
            });
    };

    useEffect(() => {
        getRestaurants();
    },[]);

    const filterCategory = (restaurants) => {
        const arrayAux = [];
        
        restaurants && restaurants.map(res => {
            arrayAux.push(res.category);
        });

        setCategory([... new Set(arrayAux)]);
    };

    console.log("cat",valueCategory);

    const filterRestaurant = restaurants && restaurants
        .filter(rest => {
            return inputText ? rest.name.toLowerCase().includes(inputText.toLowerCase()) : true
        })
        .filter(restaurant => {
            return valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()) : true
        })
        .map(restaurant => {
            return (
                <CardRestaurant
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            );
        })

    return (
        <Containerfeed>
            <Header title={"Ifuture"}/>
            <InputBox>
                <Search
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}    
                />
            </InputBox>
            <Menu>
                <MenuItem 
                    select={false}
                    onClick={() => setValueCategory("")}
                >
                    Todos
                </MenuItem>
                {
                    category.map( (cat, i) => {
                        return (
                            <MenuItem 
                                key={i}
                                select={false}
                                onClick={() => setValueCategory(cat)}
                            >
                                {cat}
                            </MenuItem>
                        );
                    })
                }
            </Menu>
            <CardsRestaurants>
                {filterRestaurant}
            </CardsRestaurants>
        </Containerfeed>
    );
};

export default Feed;