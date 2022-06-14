import { Request, Response } from "express"
import selectUsersOrder from "../data/SelectUsersOrder";


export const getUsersOrder = async(req: Request,res: Response): Promise<void> =>{
    try {
        let order: string | undefined = req.query.order?.toString();

        if(!order){
            order = "email";
        };

        if(order !== "type" && order !== "name" && order !== "email"){
            res.statusCode = 400;
            throw new Error("Invalid query param");
        };

        const users = await selectUsersOrder(order);

        if(!users.length){
            res.statusCode = 404
            throw new Error("No users found")
        };

        res.status(200).send(users);

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}