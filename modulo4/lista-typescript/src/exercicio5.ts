type User = {
    name: string, 
    email: string, 
    role: string
};

const users:Array<User> = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
];

function retornaUsers (usuarios:Array<User>):Array<string> {
    return usuarios
    .filter( (item:User) => {
        return item.role === "admin" ? true : false;
    })
    .map( (item:User) => {
        return item.email;
    });
};

console.log(retornaUsers(users));