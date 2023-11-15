// fetch
const getDataFromForm = () => {
  const requestObj = {
    firstName: "bruce",
    lastName: "lee",
    categories: ["nerdy"]
  };
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return 'http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastname}&limitTo=${requestData.categories}';
}

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke);
}

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
}

processJokeRequest();