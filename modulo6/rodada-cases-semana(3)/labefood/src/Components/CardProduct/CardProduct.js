import React, { useState } from "react";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import ModalQuantity from "../ModalQuantity/ModalQuantity";
import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProduct, IformAddButton, IformButton, IformRemoveButton, ImageProduct, InformDescription, InformPrice, NameProduct, QuantityProduct } from "./styled";

const CardProduct = ({product, restaurant}) => {
    const [ showModal, setShowModal ] = useState(false);
    
    const { requests, state } = useGlobal();
    const { addToCart, removeToCart } = requests;
    const { cart } = state;

    const choiceQuantity = (qtt) => {
        addToCart(product, qtt, restaurant);
        setShowModal(false);
    };

    const productInCart = cart.find(prod => prod.id === product.id);

    return (
        <ContainerCardProduct>
            <ImageProduct src={product.photoUrl}/>
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product.name}</NameProduct>
                    {productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
                </BoxNameQuantity>
                <InformDescription>
                    {product.description}
                </InformDescription>
                <BoxInformPriceButton>
                    <InformPrice>
                        {product.price}
                    </InformPrice>
                    {
                        productInCart ? 
                        <IformRemoveButton onClick={() => removeToCart(product.id)}>
                            Remove
                        </IformRemoveButton>
                        :
                        <IformAddButton onClick={() => setShowModal(true)}>
                            Adicionar
                        </IformAddButton>
                    }
                </BoxInformPriceButton>
                <ModalQuantity 
                    open={showModal} 
                    setOpen={setShowModal} 
                    choiceQuantity={choiceQuantity}
                />
            </BoxInform>
        </ContainerCardProduct>
    )
};

export default CardProduct;