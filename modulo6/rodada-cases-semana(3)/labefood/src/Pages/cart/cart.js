import React, { useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
import { CartConfig, CartInfo, EmptyCart, Form, Freight, InfoProfile, InfoRestaurant, Main, MainCart, Payment, Total } from "./styled";

const Cart = () => {
    const profile = useRequestData({}, `${BASE_URL}/profile`);
    const [ payment, setPayment ] = useState([]);
    const [ paymentMethod, setPaymentMethod ] = useState({
        "money": false,
        "credit": false
    });

    const onChangePayment = (event) => {
        const newCheck = {...paymentMethod};
        newCheck[event.target.name] = event.target.checked

        const result = Object.keys(newCheck).filter(pay => {
            if(newCheck[pay]){
                return [pay, ...payment]
            }
        });

        setPayment(result);
        setPaymentMethod(newCheck);
    };

    console.log(payment)

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
                    <EmptyCart>Carrinho Vazio</EmptyCart>
                </CartInfo>
                <Payment>
                    <Freight>Frete {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(6)}</Freight>
                    <Total>
                        <p>Subtotal</p>
                        <p>{new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(0)}</p>
                    </Total>
                    <h1>Forma de Pagamento</h1>
                    <hr/>
                    <Form>
                        {
                            Object.keys(paymentMethod).map(key => {
                                const checked = paymentMethod[key]
                                return (
                                    <div key={key}>
                                        <input 
                                            checked={checked}
                                            name={key}
                                            id={key}
                                            type="checkbox"
                                            onChange={onChangePayment}
                                        />
                                        <label>{key}</label>
                                    </div>
                                )
                            })
                        }
                        <button>Confirmar</button>
                    </Form>
                </Payment>
            </CartConfig>
        </Main>
    );
};

export default Cart;