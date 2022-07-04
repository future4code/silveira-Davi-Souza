import { user } from "../types/user";
import { connection } from "./connection";

class UserData {
    public async createUser( user: user ): Promise<void> {
        try {
            await connection("User_Arq")
                .insert({
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    password: user.password,
                    role: user.role
                })
        } 
        catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async getUserByEmail(email: string): Promise<any> {
        try {
            const result = await connection("User_Arq")
                .select("*")
                .where({ email });
            if(!result[0]){
                throw new Error("Usuário não encontrado");
            };
            return result[0];
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    async get(): Promise<any[]> {
        try {
            const users: any = [];

            const result = await connection("User_Arq")
                .select("*");

            for(let user of result){
                    users.push(user);
            }
            return users;
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async deleteUser( id: string ): Promise<void> {
        try {
            await connection("User_Arq")
                .where({ id })
                .del();
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        };
    };
};

export default UserData;