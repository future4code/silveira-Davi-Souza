import { UserBusiness }  from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { HashMockGenerator } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/userDatabaseMock";

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashMockGenerator(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as UserDatabase
)

describe("Testando o signup", () => {
    test("Dever retornar erro quando o nome está vazio", async () => {
        try {
            await userBusinessMock.signup("", "vitor@email.com", "123456", "normal")
        } catch(error: any) {
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro quando o email é inválido (nao tem arroba)", async () => {
        try {
            await userBusinessMock.signup("Vitor", "vitoremail.com", "123456", "normal")
        } catch(error: any) {
            expect(error.message).toEqual("Invalid email")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro quando senha inválida", async () => {
        try {
            await userBusinessMock.signup("Vitor", "vitor@email.com", "12345", "normal")
        } catch(error: any) {
            expect(error.message).toEqual("Invalid password")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro qndo recebe uma role não existente", async () => {
        try {
            await userBusinessMock.signup("Vitor", "vitor@email.com", "123456", "batata")
        } catch(error: any) {
            expect(error.message).toEqual("Invalid user role")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })

    test("Sucesso no cadastro", async () => {
        try {
            const {accessToken} = await userBusinessMock.signup("Vitor", "vitor@email.com", "123456", "NORMAL")
            expect(accessToken).toEqual("token")
        } catch(error: any) {
            console.log(error)
        } finally {
            expect.assertions(1)
        }
    })
})


describe("testes no login", () => {
    test("Deve retornar erro quando o email fornecido não existe", async () => {
        try {
            await userBusinessMock.login("batata@email.com", "123456")
        } catch(error: any) {
            // console.log(error)
            expect(error.message).toEqual("Invalid credentials")
            expect(error.statusCode).toBe(401)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro quando a senha está errada", async () => {
        try {
            await userBusinessMock.login("user2@gmail.com", "123456")
        } catch(error: any) {
            // console.log(error)
            expect(error.message).toEqual("Invalid credentials")
            expect(error.statusCode).toBe(401)
        } finally {
            expect.assertions(2)
        }
    })


    test("Sucesso no login", async () => {
        try {
            const {accessToken} = await userBusinessMock.login("user1@gmail.com", "user1password")
            expect(accessToken).toEqual("token")

        } catch(error: any) {
            console.log(error)
            // expect(error.message).toEqual("Invalid credentials")
            // expect(error.statusCode).toBe(401)
        } finally {
            expect.assertions(1)
        }
    })
})

describe("teste pegar usuário pelo id", () => {
	// (a)
    test("deve retornar um erro quando o id não estiver registrado", async () => {
        expect.assertions(2)

        try {
            await userBusinessMock.getUserById("abc");
        } 
        catch (error: any) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        };
    });

    // (b)
    test("Deve retornar usuário quando o id estiver registrado", async () => {
        expect.assertions(2)

        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.getUserById(id)
            );
            
            const result = await getUserById("id_mock_admin");

            expect(getUserById).toHaveBeenCalledWith("id_mock_admin");
            expect(result).toEqual({
                id: "id_mock_admin",
                name: "UserTest",
                email: "usertest@gmail.com",
                role: "ADMIN",
            });
        } 
        catch (error: any) {
            console.log(error.message);
        }
    });
})