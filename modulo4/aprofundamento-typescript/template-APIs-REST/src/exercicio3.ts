// exercício 3:
// a)
// type Post = {
//     autor: string,
//     texto: string
// }

// const posts:Array<Post> = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
// ];

// // b) as entradas são os autores e os posts
// function buscarPostsPorAutor(posts: Array<Post>, autorInformado: string):Array<Post> {
//     return posts.filter(
//       (post:Post) => {
//         return post.autor === autorInformado
//       }
//     )
// }

// console.log(buscarPostsPorAutor(posts, "Dobby"));