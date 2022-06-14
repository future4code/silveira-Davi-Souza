import { Request, Response } from "express";
import selectUserByType from "../data/selectUserByType";

export async function getUserByType ( req: Request, res: Response ): Promise<void> {
   try {
      if(!req.query.type){
         res.statusCode = 404;
         throw new Error("Parâmetro por query não encontrado");
      };

      const type: string = req.query.type.toString();
      const result = await selectUserByType(type);

      res.status(200).send(result);

   } catch (error) {
      res.status(500).send("Internal server error");
   };
};