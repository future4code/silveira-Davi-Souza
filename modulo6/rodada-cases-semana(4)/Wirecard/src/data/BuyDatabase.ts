import { CustomError } from "../error/BaseCustomError";
import { BuyModel } from "../models/BuyModel";
import { BaseDatabase } from "./BaseDatabase";

class BuyDatabase extends BaseDatabase{
    protected TABLE_NAME = "buy_wirecard"

    public async addBuy(input: BuyModel): Promise<void> {
        try {
            await this.getConnection()
                .insert(input)
                .into(this.TABLE_NAME);
        } 
        catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.");
        };
    };

    public async getByID(id: string): Promise<BuyModel> {
        try {
            const result: BuyModel[] = await this.getConnection()
                .select("*")
                .from(this.TABLE_NAME)
                .where({id});

            return result[0];
        } 
        catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.");
        };
    };

    public async getByEmail(email: string): Promise<BuyModel> {
        try {
            const result: BuyModel[] = await this.getConnection()
                .select("*")
                .from(this.TABLE_NAME)
                .where({email});

            return result[0];
        } 
        catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.");
        };
    };
    
    public async getByCpf(cpf: number): Promise<BuyModel> {
        try {
            const result: BuyModel[] = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({cpf});

            return result[0];
        } 
        catch (error: any) {
            throw new CustomError(500, error.message || "Internal error.");
        };
    };
};

export default BuyDatabase;