import BuyDatabase from "../data/BuyDatabase";
import { CustomError } from "../error/BaseCustomError";
import { BuyModel, InputAddBuy } from "../models/BuyModel";
import { IdGenerator } from "./../services/IdGenerator";

class BuyBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private buyData = new BuyDatabase()
    ){};

    public addBuy = async(input: InputAddBuy) => {
        try {
            const {name, email, cpf} = input;

            if(!name || !email || !cpf){
                throw new CustomError(422, "fields is empty");
            };

            if(!email.includes("@")){
                throw new CustomError(400, "Invalid email");
            };

            if(cpf.toString().length !== 11){
                throw new CustomError(400, "Invalid CPF");
            };

            const registeredEmail = await this.buyData.getByEmail(email);
            const registeredCpf = await this.buyData.getByCpf(cpf);

            if(registeredCpf || registeredEmail){
                throw new CustomError(409, "Email or CPF already registered");
            };

            const id: string = this.idGenerator.generate();

            const newBuy = new BuyModel(
                id,
                name,
                email,
                cpf
            );

            await this.buyData.addBuy(newBuy);
        } 
        catch (error: any) {
            throw new CustomError(400, error.message);
        };
    };

    public getId = async(id:string) => {
        try {
            const result = await this.buyData.getByID(id);
            if(!result) {
                throw new Error("Buy not found");
            };

            return result
        } catch (error:any) {
            throw new CustomError(400, error.message);
        };
    };
};

export default BuyBusiness;