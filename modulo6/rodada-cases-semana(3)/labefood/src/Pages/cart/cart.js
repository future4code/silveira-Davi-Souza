import React, { useEffect, useState } from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Menu from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { useRequestData } from "../../Hooks/useRequestData";
import { CartConfig, CartInfo, EmptyCart, Form, Freight, InfoProfile, InfoRestaurant, Main, MainCart, Payment, Total } from "./styled";

const Cart = () => {
    const profile = useRequestData({}, `${BASE_URL}/profile`);

    const [ payment, setPayment ]       = useState("");
    const [ fullPrice, setFullPrice ]   = useState(0);
    const [ paymentMethod ]             = useState([ "money", "credit" ]);

    const { state } = useGlobal();
    const { cart, restaurant } = state;

    const onChangePayment = (event) => {
        setPayment(event.target.value);
    };

    console.log(cart);

    const totalPrice = () => {
        const tprice = 0;
       
        for(const product of cart){
            console.log("dentro da funcao",product)
            tprice += product.price * product.quantity;
        };

        // cart.map( product => {
        //     tprice += product.price * product.quantity;
        // });

        setFullPrice(tprice);
    };

    useEffect(() => {

    }, []);

    console.log(restaurant)
    console.log(fullPrice)

    return (
        <Main>
            <MainCart>
                <p>Meu Carrinho</p>
            </MainCart>
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de Entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>
                <InfoRestaurant>
                    <p>nome rua</p>
                    <p>nome rest</p>
                    <p>30 - 45 min</p>
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
                    <h1>Forma de Pagamento</h1>
                    <hr/>
                    <Form>
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
                        <button>Confirmar</button>
                    </Form>
                </Payment>
            </CartConfig>
            <Menu page={"cart"}/>
        </Main>
    );
};

export default Cart;