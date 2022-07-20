import { validateCharacter } from "./exercicio1";
import { Character } from "./interface/Character";

//A)
// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("Invalid character");
//     }

//     if (attacker.strength > defender.defense) {
//         defender.life -= attacker.strength - defender.defense;
//     }
// };

//B)
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};

//C) A diferença entre essas duas implementações está no parâmetro onde é passada a função para validar o ataque.