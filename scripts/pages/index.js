// imports
import { photographerFactory } from "../factories/photographerFactory.js";

async function getPhotographers() {
  // fetch data can also on github page : https://valentinmam.github.io/ValentinMamichel_06_07052022
  const data = await fetch("./data/photographers.json");
  // result
  const result = await data.json();
  return {
    photographers: result.photographers,
  };
}

async function displayData(photographers) {
  // select photographers section
  const photographersSection = document.querySelector(".photographer_section");
  // for each photographer
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    // append element
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  //  get data
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
