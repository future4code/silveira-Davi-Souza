import axios from "axios";
import { baseURL }  from "./baseURL";

// a) void pois é uma função de criação (put), ela não tem retorno.
// b) 

const createNews = async ( title: string, content: string, date: number ): Promise<void> => {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
};