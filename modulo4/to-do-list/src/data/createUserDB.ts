import connection from "./connection";

type User = {
    name: string,
    nickname: string,
    email: string
}

const createUserDB =async (body: User): Promise<any> => {
    await connection("ToDoListUser")
        .insert({
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: body.name,
            nickname: body.nickname,
            email: body.email
        });
};

export default createUserDB;