/**
 * Electrons around the cores
 * Have you heard of the game "electrons around the cores"? I'm not allowed to give you the complete rules of the game, just so much:
 *
 * The game is played with 4 to 6 dice, so you get an array of 4 to 6 numbers, each 1-6
 * The name of the game is important
 *
 * You have to return the correct number five times in a row and your solution is considered to be correct
 * If you just call "submit", you'll get an array and the expected value!
 *
 * Here are some input/output pairs for you to wrap your mind around:
 *
 * [ 1, 2, 3, 4, 5 ] -> 6
 * [ 2, 2, 3, 3 ] -> 4
 * [ 6, 6, 4, 4, 1, 3 ] -> 2
 * [ 3, 5, 3, 5, 4, 2 ] -> 12
 */

function Electrons() {}
Electrons.prototype.solve = function() {
    const oddNumbers = [...arguments].filter((number) => isOdd(number));
    return oddNumbers.reduce((accumulator, number) => accumulator + number, 0) - oddNumbers.length;
};

function isOdd(value) {
    return value % 2 != 0;
}