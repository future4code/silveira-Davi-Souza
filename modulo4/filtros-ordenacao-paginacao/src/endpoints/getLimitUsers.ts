import { Request, Response } from "express"
import selectLimitUsers from "../data/selectLimitUsers";


export const getLimitUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let page: number = Number(req.query.page);

      if(!page){
         res.statusCode = 404;
         throw new Error("Parâmetro por query não encontrado");
      };

      if(typeof page !== "number"){
         res.statusCode = 400;
         throw new Error("É necessário passar o número da página por query");
      };

      if(page <= 0){
         page = 1;
      }

      let offset: number = 5 * (page - 1);

      const users = await selectLimitUsers(offset);

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