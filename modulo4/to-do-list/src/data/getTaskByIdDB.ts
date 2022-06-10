import connection from "./connection";

const getTaskByIdDB = async (id: string): Promise<any> => {
    const result = await connection("ToDoListTask AS t")
        .select("t.id", "t.title", "t.description", "t.limit_date", "t.status", "t.creator_user_id", "u.nickname")
        .innerJoin("ToDoListUser AS u", "u.id", "t.creator_user_id")
        .where("t.id", id);

    console.log(result);

    return result[0];
};

export default getTaskByIdDB;