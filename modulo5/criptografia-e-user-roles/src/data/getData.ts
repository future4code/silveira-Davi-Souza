import * as jwt from "jsonwebtoken";
import { tokenId } from "../types";

const getData = (token: string): tokenId => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
};

export default getData; 