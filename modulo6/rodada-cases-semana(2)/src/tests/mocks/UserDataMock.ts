import User from "../../model/User"
import { userMock } from "./UserMock"

export class UserDataMock {
    public findByEmail = async (email: string): Promise<User | undefined> => {
        switch (email) {
            case "user_email@gmail.com":
                return userMock;
            default:
                return undefined;
        };
    };

    public insert = async (user: User): Promise<void> => {}
};