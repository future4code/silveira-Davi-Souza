import React from "react";
import { useNavigate } from "react-router-dom";
import CardOrderHistory from "../../Components/CardOrderHistory/CardOrderHistory";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToAddressEdit, goToProfileEdit } from "../../Routes/coordinator";
import { Address, History, Inform, Main, ProfilePerson, MainHistory } from "./styled";
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
    useProtectedPage();
    const navigate = useNavigate();

    const person = useRequestData({}, `${BASE_URL}/profile`);
    const orderHistory = useRequestData({}, `${BASE_URL}/orders/history`);

    return (
        <Main>
            <Header title={"Meu Perfil"} back logout/>
            <Inform>
                <ProfilePerson>
                    <div>
                        <p>{person[0].user && person[0].user.name}</p>
                        <p>{person[0].user && person[0].user.email}</p>
                        <p>{person[0].user && person[0].user.cpf}</p>
                    </div>
                    <div onClick={() => goToProfileEdit(navigate, person[0].user.id)}>
                        <EditIcon/>
                    </div>
                </ProfilePerson>
                <Address>
                    <div>
                        <h4>Endereço Cadastrado</h4>
                        <p>{person[0].user && person[0].user.address}</p>
                    </div>
                    <div onClick={() => goToAddressEdit(navigate)}>
                        <EditIcon/>
                    </div>
                </Address>
                
                <History>
                    <MainHistory>
                        <div>
                            <p>Histórico de pedidos</p>
                        </div>
                        <hr/>
                    </MainHistory>
                    <hr/>
                    {
                        orderHistory[0].orders && orderHistory[0].orders.length > 0 ? orderHistory[0].orders && orderHistory[0].orders.map( order => {
                            return(
                                <CardOrderHistory key={order.createdAt} order={order}/>
                            )
                        })
                        :
                        <p>Você não realizou nenhum pedido</p>
                    }
                </History>
            </Inform>
            <Menu page={"profile"}/>
        </Main>
    );
};

export default Profile;