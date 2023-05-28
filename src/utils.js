export const getRandomFromArray = (array) => shuffle(array)[0];

export const getRandomBetween = (min = 1, max = 20) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const diceNotation = (string) => {
  const [count, faces] = string.split("d").map((n) => parseInt(n));

  return Array.from({ length: count }, () => getRandomBetween(1, faces)).reduce(
    (sum, item) => {
      sum += item;
      return sum;
    },
    0
  );
};

export const shuffle = (array) =>
  array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

export const getGendered = (item, gender) => {
  if (typeof item === "object") return item[gender];
  return item;
};
