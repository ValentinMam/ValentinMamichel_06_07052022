// imports
import {
  displayPhotographer,
  displayPrice,
} from "../utils/displayPhotographerPage.js";
import { Lightbox } from "../class/Lightbox.js";
import { launchModal, closeModal } from "../utils/contactForm.js";
import { mediaFactory } from "../factories/mediaFactory.js";

const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
// get photographer id from url in number
const photographerId = Number(searchParams.get("id"));
const getPhotographInfo = () => {
  // fetch data can also on github page : https://valentinmam.github.io/ValentinMamichel_06_07052022
  fetch("data/photographers.json")
    .then((res) => res.json())
    .then((json) => {
      const myPhotographer = json.photographers.find(function (photographer) {
        return photographer.id === photographerId;
      });

      // display price
      displayPrice(myPhotographer.price);

      // display photographer
      displayPhotographer(
        myPhotographer.name,
        myPhotographer.portrait,
        myPhotographer.city,
        myPhotographer.country,
        myPhotographer.tagline
      );

      // CONTACT FORM
      const nameForm = document.querySelector(".name-form");
      nameForm.innerHTML = myPhotographer.name;
      const modalBtn = document.querySelectorAll(".contactButton");
      const closeBtn = document.querySelector("#form__close");

      // open and close modal
      modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
      closeBtn.addEventListener("click", closeModal);

      // focus form inputs
      const formData = document.querySelectorAll(".formData");
      const firstName = document.getElementById("first");
      const lastName = document.getElementById("last");
      const eMail = document.getElementById("email");

      // verify if form datas
      document
        .getElementById("formulaire")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          let error = "";

          // first name validation
          if (firstName.value.length < 2) {
            error = "Veuillez entrer 2 caractères ou plus pour ce champ";
            formData[0].setAttribute("data-error", error);
            // if data-error = true : error message is displayed
            formData[0].setAttribute("data-error-visible", true);
          } else {
            formData[0].setAttribute("data-error-visible", false);
          }

          // last name validation
          if (lastName.value.length < 2) {
            error = "Veuillez entrer 2 caractères ou plus pour ce champ";
            formData[1].setAttribute("data-error", error);
            // if data-error = true : error message is displayed
            formData[1].setAttribute("data-error-visible", true);
          } else {
            formData[1].setAttribute("data-error-visible", false);
          }

          // email validation
          if (
            !eMail.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,64})+$/)
          ) {
            error = "Merci de saisir une adresse mail valide";
            formData[2].setAttribute("data-error", error);
            // if data-error = true : error message is displayed
            formData[2].setAttribute("data-error-visible", true);
          } else {
            formData[2].setAttribute("data-error-visible", false);
          }

          // console log of form datas
          if (error === "") {
            // modalbg.style.display = "none";
            console.log("Prénom :" + firstName.value);
            console.log("Nom :" + lastName.value);
            console.log("Email :" + eMail.value);
            console.log("Message :" + document.querySelector("#message").value);
            closeModal();
          }
        });

      // MEDIAS
      const mediaPhotographer = json.media;

      // array of sorted media by photographer id
      let resultSortingMedia = [];
      for (let i = 0; i < mediaPhotographer.length; i++) {
        // if the current media's photographer id is equal to the current photographer id
        if (photographerId === mediaPhotographer[i].photographerId) {
          // push the current media to the array
          resultSortingMedia.push(mediaPhotographer[i]);
        }
      }
      for (let i = 0; i < resultSortingMedia.length; i++) {
        let newMedia = mediaFactory(
          resultSortingMedia[i],
          resultSortingMedia,
          photographerId
        );

        newMedia.display();
        resultSortingMedia[i] = newMedia;
      }

      Lightbox.init();

      // sort medias by date, title, popularity
      const filtreArrow = document.querySelector(".filter-container");
      function Arrow() {
        if (filtreArrow.classList.contains("on")) {
          filtreArrow.classList.remove("on");
        } else {
          filtreArrow.classList.add("on");
        }
      }
      filtreArrow.addEventListener("click", Arrow);

      document
        .querySelector("#filters-select")
        // change event
        .addEventListener("change", function (e) {
          // sorted by popularity
          if (e.target.value === "popularite") {
            resultSortingMedia.sort(function (a, b) {
              // if a's popularity is greater than b's popularity
              if (a.likes > b.likes) {
                return -1;
              } else {
                return 1;
              }
            });
          }
          // sorted by title
          if (e.target.value === "titre") {
            resultSortingMedia.sort(function (a, b) {
              //  if a's title is greater than b's title
              if (a.title > b.title) {
                return 1;
              } else {
                return -1;
              }
            });
          }
          // sorted by date
          if (e.target.value === "date") {
            resultSortingMedia.sort(function (a, b) {
              // if a's date is greater than b's date
              if (a.date > b.date) {
                return 1;
              } else {
                return -1;
              }
            });
          }
          // display sorted medias
          document.querySelector(".wrapper").innerHTML = "";
          for (let i = 0; i < resultSortingMedia.length; i++) {
            resultSortingMedia[i].display();
          }
          Lightbox.init();
        });
    });
};
getPhotographInfo();
