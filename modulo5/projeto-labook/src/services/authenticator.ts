import * as jwt from "jsonwebtoken"

export type AuthenticationData = {
   id: string,
   email: string
};

class Authenticator {
   generateToken( payload: AuthenticationData ): string {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string
         }
      );
   };

   getTokenData( token: string ): AuthenticationData {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as AuthenticationData;
   };
};

export default Authenticator;