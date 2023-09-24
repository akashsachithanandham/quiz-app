export function fetchQuestions() {
  return new Promise((resolve, reject) =>
    fetch("https://run.mocky.io/v3/4ed4e717-526e-4322-9074-cf07d144d5c4")
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
