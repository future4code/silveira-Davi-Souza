import connection from "./connection";

type User = {
    name: string,
    nickname: string
}

const editUserDB =async (id: string, body: User): Promise<any> => {
    const result = await connection("ToDoListUser")
        .update({
            name: body.name,
            nickname: body.nickname
        })
        .where("id", id);
    
    console.log(result)

};

export default editUserDB;