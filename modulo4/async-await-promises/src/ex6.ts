import axios from "axios";
import { baseURL }  from "./baseURL";
import { getSubscribers } from "./ex3";

// a) Ele retorna todas as promises assim que tiver executado todo o necessário, retorna tudo em ordem.
// b) Ele fará de forma mais organizada e dinâmica.
// c)

type user = {
	id: string;
	name: string;
	email: string;
};

const sendNotifications = async ( users: user[], message: string ): Promise<void> => {
    try {
        const promises = users.map(user =>{
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        });
        
        await Promise.all(promises);

    } 
    catch {
        console.log("Error");
    }
};

const main = async (): Promise<any> => {
    try {
        const users: user[] = await getSubscribers();
        sendNotifications( users, "Tem uma notificação esperando por você!!!");
    } 
    catch {
        console.log("Error");
    };
};

main();