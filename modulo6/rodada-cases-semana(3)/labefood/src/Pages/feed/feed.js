import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { CardsRestaurants, Containerfeed, InputBox, MenuItem, MenuNav, Search } from "./styled";

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

        const takeOutRepeat = [... new Set(arrayAux)];

        const changeObjArr = [];

        takeOutRepeat.map(category => {
            changeObjArr.push({category, select:false});
        });

        setCategory(changeObjArr);
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

        const changeCategory = (input) => {
            setValueCategory(input);

            const result = category.map(cat => {
                if(cat.category === input){
                    return{
                        ...cat,
                        select: true
                    }
                }
                else {
                    return{
                        ...cat,
                        select: false
                    }
                }
            });

            setCategory(result);
        };

    return (
        <Containerfeed>
            <Header title={"Ifuture"} back={false}/>
            <InputBox>
                <Search
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}    
                />
            </InputBox>
            <MenuNav>
                <MenuItem 
                    onClick={() => changeCategory("")}
                >
                    Todos
                </MenuItem>
                {
                    category.map( (cat, i) => {
                        return (
                            <MenuItem 
                                key={i}
                                select={cat.select}
                                onClick={() => changeCategory(cat.category)}
                            >
                                {cat.category}
                            </MenuItem>
                        );
                    })
                }
            </MenuNav>
            <CardsRestaurants>
                {filterRestaurant}
            </CardsRestaurants>
            <Menu page={"home"}/>
        </Containerfeed>
    );
};

export default Feed;