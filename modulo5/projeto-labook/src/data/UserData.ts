import User from "../model/User";
import BaseDatabase from "./BaseDatabase";

class UserData extends BaseDatabase{
    protected TABLE_NAME = "labook_users";

    public findByEmail = async (email: string): Promise<User> => {
        try {
            const result = await this.connection(this.TABLE_NAME)
                .select("*")
                .where({email});
            
            return result[0] && User.toUserMode(result[0]);
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage  || error.message);
        };
    };

    public insert = async (user: User): Promise<void> => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                });
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage  || error.message);
        };
    };
};

export default UserData;