import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToFeed } from "../../Routes/coordinator";
import { DivForm, CartConfig, CartInfo, EmptyCart, Form, Freight, InfoProfile, InfoRestaurant, Main, MainCart, Payment, StyledButton, Total } from "./styled";

const Cart = () => {
    useProtectedPage();
    const navigate = useNavigate();

    const profile = useRequestData({}, `${BASE_URL}/profile`);

    const [ payment, setPayment ]       = useState("");
    const [ fullPrice, setFullPrice ]   = useState(0);
    const [ paymentMethod ]             = useState([ "money", "creditcard" ]);

    const { state, setters } = useGlobal();
    const { cart, restaurant } = state;
    const { setOrder, setCart } = setters;

    const onChangePayment = (event) => {
        setPayment(event.target.value);
    };

    const totalPrice = () => {
        let tprice = 0;

        for(const product of cart){
            tprice = product.price * product.quantity;
        };

        setFullPrice(tprice);
    };

    useEffect(() => {
        totalPrice();
    }, []);

    const placeOrder = async () => {
        const body = {
            products: cart.map( prod => {
                return({
                    id: prod.id,
                    quantity: prod.quantity
                })
            }),
            paymentMethod: payment
        };

        await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then(res => {
                setOrder(res.data.order);
                setCart(null);
                alert("Compra realizada com sucesso!")
                goToFeed(navigate);
            })
            .catch( error => {
                console.log(error)
                alert(error.response.data.message)
            });
    };

    const onSubmitPlaceOrder = (e) => {
        e.preventDefault();
        placeOrder();
    };

    return (
        <>
            <Header title={"Meu Carrinho"}/>
            <Main>
                <CartConfig>
                    <InfoProfile>
                        <p>Endereço de Entrega</p>
                        <p>{profile[0].user && profile[0].user.address}</p>
                    </InfoProfile>
                    <InfoRestaurant>
                        <p>{restaurant.name}</p>
                        <p>{restaurant.address}</p>
                        {restaurant.deliveryTime && <p>{restaurant.deliveryTime} min</p>}
                    </InfoRestaurant>
                    <CartInfo>
                        {
                            cart && cart.length > 0 ? cart.map(data => {
                                return (
                                    <CardProduct
                                        product={data}
                                        key={data.id}
                                        restaurant={restaurant}
                                    />
                                )
                            }) 
                            : 
                            <EmptyCart>Carrinho Vazio</EmptyCart>
                        }
                    </CartInfo>
                    <Payment>
                        <Freight>Frete {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(restaurant.shipping ? restaurant.shipping : 0)}</Freight>
                        <Total>
                            <p>Subtotal</p>
                            <p>{new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(fullPrice)}</p>
                        </Total>
                        
                        <DivForm>
                            <div className={"payment"}>
                                <h3>Forma de Pagamento</h3>
                                <hr/>
                            </div>
                            <Form onSubmit={onSubmitPlaceOrder}>
                                {
                                    paymentMethod.map(key => {
                                        return (
                                            <div key={key}>
                                                <input 
                                                    checked={payment === key}
                                                    name={"paymentMethod"}
                                                    id={key}
                                                    type="radio"
                                                    onChange={onChangePayment}
                                                    value={key}
                                                />
                                                <label htmlFor={key}>{key}</label>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    cart && cart.length > 0 ? 
                                    <StyledButton type="submit" >Confirmar</StyledButton>
                                    : 
                                    <StyledButton disabled>Confirmar</StyledButton>
                                }
                                
                            </Form>
                        </DivForm>
                    </Payment>
                </CartConfig>
                <Menu page={"cart"}/>
            </Main>
        </>
    );
};

export default Cart;