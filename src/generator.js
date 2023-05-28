import generator from "./generator.it.json";
import {
  diceNotation,
  getGendered,
  getRandomBetween,
  getRandomFromArray,
  shuffle,
} from "./utils";

const getIntro = () => generator.intro;
const getFirstName = () => generator.firstNames[diceNotation("4d6") - 4];
const getLastName = () => generator.lastNames[diceNotation("4d6") - 4];
const getAge = () => generator.age[diceNotation("4d6") - 4];
const getTrait = () => generator.traits[diceNotation("4d6") - 4];
const getProfession = () => generator.professions[diceNotation("4d6") - 4];

const getPast = () => getRandomFromArray(generator.past);
const getGoal = () => getRandomFromArray(generator.goal);

const getItem = () => getRandomFromArray(generator.items);
const getStartingItem = () => generator.startingItems[diceNotation("2d8") - 2];

const distributePoints = () => {
  let remainingPoints = 4;

  const pointsArray = Array.from({ length: 3 }, () => {
    const maxPoints = remainingPoints;
    const points = getRandomBetween(0, maxPoints);
    remainingPoints -= points;
    return points;
  });

  pointsArray[pointsArray.length] = remainingPoints;

  return pointsArray;
};

const getTraits = (gender) => {
  const firstTrait = getGendered(getTrait(), gender);
  let secondTrait = getGendered(getTrait(), gender);
  while (firstTrait === secondTrait) {
    secondTrait = getGendered(getTrait(), gender);
  }

  return [firstTrait, secondTrait];
};

const getItems = () => {
  const firstItem = getItem();
  let secondItem = getItem();
  while (firstItem === secondItem) {
    secondItem = getItem();
  }

  return [firstItem, secondItem];
};

export const getCharacter = () => {
  const { name: firstName, gender } = getFirstName();
  const lastName = getLastName();

  const intro = getGendered(getIntro(), gender);

  const { name: profession, pay, variants } = getProfession();
  const professionVariant = getGendered(
    getRandomFromArray(variants || []),
    gender
  );

  const age = getAge();

  const traits = getTraits(gender);

  const past = getPast();
  const goal = getGoal();

  const [courage, selfControl, sharpness, wisdom] = distributePoints();

  const hp = 8 + courage;
  const curseResistance = 2 + wisdom;

  const items = [...getItems(), getStartingItem()];

  return {
    firstName,
    lastName,
    intro,
    profession: `${getGendered(profession, gender)}${
      professionVariant ? ` (${professionVariant})` : ""
    }`,
    age,
    traits,
    past,
    goal,

    stats: {
      courage,
      selfControl,
      sharpness,
      wisdom,
      hp,
      curseResistance: curseResistance >= 4 ? 4 : curseResistance,
    },

    items,
  };
};
