const string = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (string) {
    case "add":
        console.log(`Resposta:`, num1 + num2);
        break;

    case "sub":
        console.log(`Resposta:`, num1 - num2);
        break;

    case "mult":
        console.log(`Resposta:`, num1 * num2);
        break;

    case "div":
        console.log(`Resposta:`, num1 / num2);
        break;

    default:
        console.log("Não encontrado");
        break;
}