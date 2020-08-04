import 'regenerator-runtime';

// global variables
const apiKey = 'SYKniSddOrldcBh7JeEj';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

export const postScore = async (name, s) => {
  const userScore = {
    user: name,
    score: s,
  };
    // request options
  const payload = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScore),
  };

  // send POST request
  const response = await fetch(url, payload);
  const data = await response.json();
  return data;
};

export const getScores = async () => {
  const payload = {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, payload);
  const topScores = await response.json();

  return topScores.result;
};
