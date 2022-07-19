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
        };
    };

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const result = await connection("COOKENU_USERS")
                .select("*")
                .where({ email });

            return result[0] && User.toUserMode(result[0]);

        } 
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async followUserId(id: string, userToFollowId: string, userId: string): Promise<void> {
        try {
            const followersList = await connection("COOKENU_FOLLOWERS")
                .select("*")
                .where({"follower_id": userId});

            const exists = followersList.filter( followers => {
                if(followers.creator_id === userToFollowId){
                    return true
                };
            });
            
            if(exists.length > 0){
                throw new Error("Usuário não pode seguir o mesmo usuário duas vezes.");
            };

            if(userId === userToFollowId){
                throw new Error("Usuário não pode seguir a si mesmo.");
            };
            await connection("COOKENU_FOLLOWERS")
                .insert({
                    "id": id,
                    "follower_id": userId,
                    "creator_id": userToFollowId
                });
        } 
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async unfollowUserId( userToUnfollowId: string ): Promise<void> {
        try {
            await connection("COOKENU_FOLLOWERS")
                .delete()
                .where({ "creator_id": userToUnfollowId });
        } 
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };
};