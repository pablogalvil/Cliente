export function formatData(data) {
  return JSON.stringify(data, null, 2);
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
