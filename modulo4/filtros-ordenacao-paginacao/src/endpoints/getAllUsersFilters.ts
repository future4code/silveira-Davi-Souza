import { Request, Response } from "express"
import selectAllUsersFilter from "../data/selectAllUsersFilter";
import selectLimitUsers from "../data/selectLimitUsers";

export const getAllUsersFilters = async(req: Request,res: Response): Promise<void> =>{
    try {
        let typeFilter: string | undefined = req.body.typeFilter?.toString();
        let filter: string | undefined = req.body.filter?.toString();
        let order: string | undefined = req.body.order?.toString();
        let page: number = Number(req.body.page);
        let compare: string = "LIKE"

        if(!typeFilter || !filter){
            typeFilter = "name";
            filter = "@";
            compare = "!="
        };

        if(!order){
            order = "name";
        };

        if(order !== "type" && order !== "name" && order !== "email"){
            res.statusCode = 400;
            throw new Error("Invalid query param");
        };

        if(!page || page <= 0){
            page = 1;
        };

        if(typeof page !== "number"){
            res.statusCode = 400;
            throw new Error("É necessário passar o número da página por query");
        };

        let offset: number = 5 * (page - 1);

        const users = await selectAllUsersFilter(filter, typeFilter, compare, order, offset);

        if(!users.length){
            res.statusCode = 404;
            throw new Error("No users found");
        };

        res.status(200).send(users);
        
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage);
    };
};