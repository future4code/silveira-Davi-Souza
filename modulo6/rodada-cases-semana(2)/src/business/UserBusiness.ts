import UserData from "../data/UserData";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";

class UserBusiness {
    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ){};

    public signup = async (user: signupInputDTO) => {
        const { name, email, password } = user;

        if( !name || !email || !password ) {
            throw new Error("Invalid Inputs");
        };

        const isRegistered = await this.userData.findByEmail( email );

        if(isRegistered){
            throw new Error("User already exists");
        };

        const id = this.idGenerator.generateId();
        const hashPassword = await this.hashManager.hash( password );

        const newUser = new User( id, name, email, hashPassword );
        
        await this.userData.insert(newUser);

        const token = this.authenticator.generateToken({ id, email });

        return token;
    };

    public login = async (user: loginInputDTO) => {
        const { email, password } = user;

        if( !email || !password ){
            throw new Error("Invalid Inputs");
        };

        const isRegistered = await this.userData.findByEmail( email );

        if(!isRegistered){
            throw new Error("User is not registered");
        };

        const correctPassword = await this.hashManager.compare( password, isRegistered.getPassword() );

        if(!correctPassword){
            throw new Error("Incorrect password");
        };

        const token = this.authenticator.generateToken( { id: isRegistered.getId(), email } );

        return token;
    };
};

export default UserBusiness;