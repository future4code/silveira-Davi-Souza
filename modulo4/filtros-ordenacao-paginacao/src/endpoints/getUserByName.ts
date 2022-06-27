import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";

export async function getUserByName ( req: Request, res: Response ): Promise<void> {
   try {
      if(!req.query.name){
         res.statusCode = 404;
         throw new Error("Parâmetro por query não encontrado");
      };

      const name: string = req.query.name.toString();
      const result = await selectUserByName(name);

      res.status(200).send(result);

   } catch (error) {
      res.status(500).send("Internal server error");
   };
};