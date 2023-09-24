export function fetchQuestions() {
  return new Promise((resolve, reject) =>
    fetch("https://run.mocky.io/v3/1ecc500f-634a-40f7-ad2a-3ba09652c50a")
      .then((response) => response.json())

      .then((response_data) => {
        resolve(response_data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
        reject(err);
      })
  );
}
