import { User } from "../entities/User";
import connection from "./connection";

export class UserDB {
    public async createUser(user: User):Promise<void> {
        try {
            await connection("COOKENU_USERS")
                .insert({
                    "id": user.getId(),
                    "name": user.getName(),
                    "email": user.getEmail(),
                    "password": user.getPassword()
                });
        } 
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const result = await connection("COOKENU_USERS")
                .select("*")
                .where({ email });

            return result[0] && User.toUserMode(result[0]);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
};