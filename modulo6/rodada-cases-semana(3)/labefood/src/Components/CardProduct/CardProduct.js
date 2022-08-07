import React, { useState } from "react";
import ModalQuantity from "../ModalQuantity/ModalQuantity";
import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProduct, IformButton, ImageProduct, InformDescription, InformPrice, NameProduct } from "./styled";

const CardProduct = ({product}) => {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <ContainerCardProduct>
            <ImageProduct src={product.photoUrl}/>
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product.name}</NameProduct>
                </BoxNameQuantity>
                <InformDescription>
                    {product.description}
                </InformDescription>
                <BoxInformPriceButton>
                    <InformPrice>
                        {product.price}
                    </InformPrice>
                    <IformButton onClick={() => setShowModal(true)}>
                        adicionar
                    </IformButton>
                </BoxInformPriceButton>
                <ModalQuantity open={showModal} setOpen={setShowModal}/>
            </BoxInform>
        </ContainerCardProduct>
    )
};

export default CardProduct;