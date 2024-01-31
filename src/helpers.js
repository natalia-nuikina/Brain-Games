const getRandomNumber = (range) => {
  const result = Math.floor(Math.random() * range);
  return result;
}; // '* 100' получаем число > 0 и <= 100

export default getRandomNumber;
