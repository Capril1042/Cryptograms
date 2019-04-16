/* Returns a random number between a minimum and maximum number
takes in min and max: Used to find random numbers for array maniplations */

export default function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}