export async function getSessionToken() {
  const sessionTokenRequestUrl =
    "https://opentdb.com/api_token.php?command=request";
  const response = await fetch(sessionTokenRequestUrl);
  const { token } = await response.json();
  return token;
}

export async function getCategoryID(category) {
  const response = await fetch("https://opentdb.com/api_category.php");
  const { trivia_categories } = await response.json();
  const { id } = trivia_categories.filter(
    (trivia_category) => trivia_category.name === category
  )[0];
  return id;
}

export function shuffle(originalArray) {
  // Fisher–Yates shuffle
  let array = originalArray.slice();
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}
