import UserData from "../data/UserData";
import { generateToken, getTokenData } from "../services/authenticator";
import { compare, hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user, userInput } from "../types/user";

const userDataBase = new UserData();

class UserBusiness {
    public signup = async (userInput: userInput) => {
        const user: {name: string, email: string, password: string, role: string} = userInput;

        if(!user.name || !user.email || !user.password || !user.role){
            throw new Error("Please fill all the fields");
        };

        if(user.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(user.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id: string = generateId();
        const hashPassword: string = await hash(user.password);

        const newUser: user = {
            id,
            name: user.name,
            email: user.email,
            password: hashPassword,
            role: user.role
        };
        
        await userDataBase.createUser(newUser);
        const token: string = generateToken({id: newUser.id, role: newUser.role});

        return token;
    };

    public login = async (user: {email: string, password: string}) => {

        const userFromDB = await userDataBase.getUserByEmail(user.email);

        console.log(userFromDB)

        const hashCompare = await compare(user.password, userFromDB.password);

        const accessToken = generateToken({ id: userFromDB.id, role: userFromDB.role});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    };

    async get(token: string) {  
        getTokenData(token);
        return await userDataBase.get();
    };

    async deleteUser(input: {id:string, token:string}) {	
        const verifiedToken = getTokenData(input.token);

        if(verifiedToken.role !== "ADMIN"){
            throw new Error("Apenas administradores podem deletar usuários!")
        }

        return await userDataBase.deleteUser(input.id);
    };
};

export default UserBusiness;