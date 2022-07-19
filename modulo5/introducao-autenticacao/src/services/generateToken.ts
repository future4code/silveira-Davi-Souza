import * as jwt from "jsonwebtoken";
import { tokenId } from "../types";

export const generateToken = (input: tokenId): string => {
    const token = jwt.sign(
        {
            id: input.id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: "1min"
        }
    );
    
    return token;
};