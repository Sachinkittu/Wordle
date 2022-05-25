//import words from "./data/sgb-words.txt";

const defaultMessage = " Using word of the day instead.";

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1));
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`);
      } else {
        return query;
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`);
    }
  }

  const now = new Date();
  const start = new Date(2022, 0, 0);
  const diff = Number(now) - Number(start);
  let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  while (day > answers.length) {
    day -= answers.length;
  }
  return answers[day];
}


const answers = await fetch("../src/data/sgb-words.txt")
  .then((res) => res.text())
  .then((result) => {
    return result.split("\r\n");
  });


const allowedGuesses = answers

export const allWords = [...answers, ...allowedGuesses];
