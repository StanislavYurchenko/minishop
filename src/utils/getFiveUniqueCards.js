const getRandomNumber = max => Math.floor(Math.random() * max);

const getRandomColor = () => {
  let color = '';

  for (let i = 0; i < 3; i++) {
    color += getRandomNumber(255).toString(16).padStart(2, 0);
  }

  return color;
};

export const getFiveUniqueCards = listOfObj => {
  const cards = [];
  const colors = [];

  while (colors.length < 5) {
    const color = getRandomColor();

    const isUniqueInObj =
      listOfObj.length > 0
        ? !listOfObj.some(object => object.color === color)
        : true;

    const isUniqueInColors = !colors.includes(color);
    if (isUniqueInObj && isUniqueInColors) colors.push(color);
  }

  colors.forEach(color => {
    const card = {
      price: getRandomNumber(100),
      color: color,
    };
    cards.push(card);
  });

  return cards;
};
