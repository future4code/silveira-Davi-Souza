import UserData from "../data/UserData";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { signupInputDTO } from "../types/SignupInputDTO";

class UserBusiness {
    constructor(
        private userData: UserData
    ){};

    public signup = async (user: signupInputDTO) => {
        const { name, email, password } = user;

        if( !name || !email || !password ) {
            throw new Error("Invalid Inputs");
        };

        const isRegistered = this.userData.findByEmail(email);

        if(isRegistered){
            throw new Error("User already exists");
        };

        const id = generateId();
        const hashPassword = await hash(password);

        
    };
};

export default UserBusiness;