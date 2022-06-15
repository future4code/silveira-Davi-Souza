import axios from "axios";
import { UserAddress } from "../types";

export const getFullAdress = async ( body: { 
    cep: string, 
    numero: number, 
    complemento:string 
} ): Promise<UserAddress | undefined> => {
    try {
        const { cep, numero, complemento } = body

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        const address: UserAddress = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            numero: numero,
            complemento: complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        };

        return address;

    } catch (error) {
        return undefined;
    };
};