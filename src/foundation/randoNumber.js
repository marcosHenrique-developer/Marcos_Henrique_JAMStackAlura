/* eslint-disable import/prefer-default-export */
export function randomNumberInRange(min, max) {
  return Math.abs(Math.ceil(Math.random() * (max - min) + min));
}
