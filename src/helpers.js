const getRandomNum = () => {
  const result = Math.ceil(Math.random() * 100);
  return result;
}; // '* 100' получаем число > 0 и <= 100

export default getRandomNum;
