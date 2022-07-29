export type AuthenticationDataMock = {
    id: string,
    email: string
 };

export class Authenticator {
    generateToken( payload: AuthenticationDataMock ): string {
        return "token";
    };

    getTokenData( token: string ): AuthenticationDataMock {
        const tokenData: AuthenticationDataMock = {
            id: "id_mock",
            email: "email_mock@gmail.com"
        };

        return tokenData;
    };
};