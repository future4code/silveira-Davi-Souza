import { validateCharacter } from "../src/exercicio1";
import { performAttack } from "../src/exercicio3";
import { Character } from "../src/interface/Character";

//exercício 1/2

//A)
test("Should return false for empty name", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 50,
        defense: 15
    });

    expect(result).toBe(false);
});

//B)
test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
});

//C)
test("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 900,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
});

//D)
test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 900,
      strength: 400,
      defense: 0,
    });

    expect(result).toBe(false);
});

//E)
test("Should return false for strength negative", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 900,
      strength: -400,
      defense: 25,
    });

    expect(result).toBe(false);
});

//F)
test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
});

//exercício 4

//A) Criar um mock de validateCharacter pois performAttack pode receber um mock dela.

//B) test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
//         return true
//     });
// });

//C) test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
//         return false
//     });
// });

// Exercício 5 
//A) 
test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
        return true;
    });

    const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: 600,
    };

    const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
});

//B)
test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
        return false;
    });

    const attacker: Character = {
        name: "",
        life: 1500,
        defense: 200,
        strength: 600,
    };

    const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
    };

    try {
        performAttack(attacker, defender, validatorMock as any);
    } catch (err: any) {
        expect(err.message).toBe("Invalid character");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
    }
});