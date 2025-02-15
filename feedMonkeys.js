// const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 */

/**
 * Feeds monkeys with the specified fruit.
 *
 * @param {string[]} monkeysList - An array of monkey names.
 * @param {string} fruit - The type of fruit to feed the monkeys.
 * @returns {string[]} An array of strings indicating each monkey has been fed with the specified fruit.
 */

export const feedMonkeys = (monkeysList, fruit) => {
    const result = [];

    for (let i = 0; i < monkeysList.length; i++) {
      result.push(`${monkeysList[i]} eats ${fruit}`);
    }
    
    return result;
  }

  
