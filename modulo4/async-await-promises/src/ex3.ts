import axios from "axios";
import { baseURL }  from "./baseURL";

// a) não teremos erro.
// b) para termos maior controle de saída, um tipo any pode ser qualquer coisa, por isso mapear é importante.
// c) 

type user = {
	id: string;
	name: string;
	email: string;
};

export const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
};

