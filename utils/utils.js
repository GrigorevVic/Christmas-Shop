
const currentYear = new Date().getFullYear();

const newYear = new Date(currentYear + 1, 0, 1, 0, 0);

export const getTimeToNewYear = () => {
  const timeToNewYear =
    (Date.parse(newYear) - Date.parse(new Date()) + 60 * 60 * 3 * 1000) / 1000;
  const seconds = Math.floor(timeToNewYear % 60);
  const minutes = Math.floor((timeToNewYear / 60) % 60);
  const hours = Math.floor((timeToNewYear / (60 * 60)) % 24);
  const days = Math.floor(timeToNewYear / (60 * 60 * 24));
  return { days, hours, minutes, seconds };
};

export const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
