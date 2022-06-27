import axios from "axios";
import { baseURL }  from "./baseURL";

// a) A única diferença visível é onde indicamos que a função é assíncrona, na função nomeada é logo no inicio antes de declarar o nome, já na função arrow é antes de passar ou não os parâmetros (antes dos parênteses).
// b) 

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};