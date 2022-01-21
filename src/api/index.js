const baseUrl = "https://opentdb.com";

export async function getSessionToken() {
  const sessionTokenRequestUrl = `${baseUrl}/api_token.php?command=request`;
  const response = await fetch(sessionTokenRequestUrl);
  const { token } = await response.json();
  return token;
}

export async function getCategories() {
  const response = await fetch(`${baseUrl}/api_category.php`);
  const { trivia_categories } = await response.json();
  return trivia_categories;
}

export async function getCategoryID(category) {
  const trivia_categories = await getCategories();
  const { id } = trivia_categories.filter(
    (trivia_category) => trivia_category.name === category
  )[0];
  return id;
}

export async function getQuestions(
  amount,
  category = "",
  difficulty = "",
  sessionToken
) {
  if (!sessionToken) return;
  const queryParameter = `amount=${amount}${category}${difficulty}&token=${sessionToken}`;
  const response = await fetch(`${baseUrl}/api.php?${queryParameter}`);
  const data = await response.json();
  return data;
}
