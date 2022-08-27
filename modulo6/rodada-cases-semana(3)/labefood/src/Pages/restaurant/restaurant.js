import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Components/CardProduct/CardProduct";
import CardRestaurantDetails from "../../Components/CardRestaurantDetails/CardRestaurantDetails";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { CardRestaurant, Category, ContainerRestaurant, SectionProductByCategory } from "./styled";

const Restaurant = () => {
    useProtectedPage();

    const { restaurantId } = useParams();
    const [ restaurant, setRestaurant ] = useState({});
    const [ categories, setCategories ] = useState([]); 

    const getRestaurant = async () => {
        await axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then(res => {
                setRestaurant(res.data.restaurant);
            })
            .catch(error => {
                alert(error.response.data.message)
            });
    };

    useEffect(() => {
        getRestaurant();
    },[]);

    useEffect(() => {
        if(restaurant.products){
            const newCategories = [];
            for(const product of restaurant.products){
                if(!newCategories.includes(product.category)){
                    newCategories.push(product.category);
                };
            };
            setCategories(newCategories);
        };
    },[restaurant]);

    return (
        <ContainerRestaurant>
            <Header title={"Restaurante"} back/>
            <CardRestaurant>
                <CardRestaurantDetails restaurant={restaurant}/>
                {
                    restaurant.products 
                    &&
                    categories.map(category => {
                        return (
                            <SectionProductByCategory key={category}>
                                <Category>{category}</Category>
                                {
                                    restaurant.products
                                    .filter(product => {
                                        return product.category === category;
                                    })
                                    .map(product => {
                                        return( 
                                            <CardProduct 
                                                product={product} 
                                                key={product.id}
                                                restaurant={restaurant}
                                            />
                                        )
                                    })
                                }
                            </SectionProductByCategory>
                        );
                    })
                }
            </CardRestaurant>
        </ContainerRestaurant>
    );
};

export default Restaurant;