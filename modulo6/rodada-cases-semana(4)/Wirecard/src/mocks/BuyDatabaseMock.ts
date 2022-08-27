import { BuyModel } from "../models/BuyModel"
import { Buyhaw, Buyhawhaw } from "./BuyMock"

export class BuyDatabaseMock {
    public async insert(buy: BuyModel): Promise<void> { };

    public async getByEmail(email: string): Promise<BuyModel | undefined> {
        switch (email) {
            case "haw@gmail.com":
                return Buyhaw;
            case "hawhaw@gmail.com":
                return Buyhawhaw;
            default:
                return undefined;
        };
    };
    public async getByCpf(cpf: number): Promise<BuyModel | undefined> {
        switch (cpf) {
            case 12365478909:
                return Buyhaw;
            case 34587697609:
                return Buyhawhaw;
            default:
                return undefined;
        };
    };
    public async getByID(id: string): Promise<BuyModel | undefined> {
        switch (id) {
            case "id_mock1":
                return Buyhaw;
            case "id_mock2":
                return Buyhawhaw;
            default:
                return undefined;
        };
    };
};