// fetch datas on github page : https://valentinmam.github.io/ValentinMamichel_06_07052022

function getPhotographers() {
  return fetch(
    "https://valentinmam.github.io/ValentinMamichel_06_07052022/data/photographers.json"
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}

export { getPhotographers };
