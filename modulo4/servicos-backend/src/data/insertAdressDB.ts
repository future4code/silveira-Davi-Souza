import { UserAddress } from "../types";
import { connection } from "./connection";

export const insertAdressDB = async ( adress: UserAddress ) => {

    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = adress;

    await connection("user_address").insert({
        id: Math.floor(Date.now() * Math.random()).toString(36), 
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    });
};