export function fetchQuestions() {
  return new Promise((resolve, reject) =>
    fetch("https://run.mocky.io/v3/53fde6d3-dd02-4de7-abfe-10b5f5302650")
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
