// const getRandomNumber = (range) => {
//   const result = Math.floor(Math.random() * range);
//   return result;
// }; // '* 100' получаем число > 0 и <= 100

const getRandomNumber = (min, max) => {
  let result;
  let range;
  if (max > 0 && max <= 10) {
    range = 10;
  } else if (max > 10 && max <= 100) {
    range = 100;
  } else if (max > 100 && max <= 1000) {
    range = 1000;
  }
  do {
    result = Math.floor(Math.random() * range);
  } while (result < min || result > max);
  return result;
};

export default getRandomNumber;
