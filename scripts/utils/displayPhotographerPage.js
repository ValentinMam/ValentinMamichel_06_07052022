export function displayPhotographer(name, portrait, city, country, tagline) {
  // display photographer header
  const sectionPhotographHeader = document.getElementById("photographHeader");
  sectionPhotographHeader.innerHTML =
    sectionPhotographHeader.innerHTML +
    `<article class="photographProfil">
        <h1 class="photographName">${name}</h1> 
        <span class="photographLocation">${city}, ${country}</span>
        <p class="photographTagline">${tagline}</p>
      </article>
      <div class="divContactButton">
          <button title= "contactez-moi" class="contactButton">Contactez-moi</button>
      </div>
      <figure id="photographPortrait" class="photographPortrait">
        <img class="photographPhotoProfil" src="assets/photographers/${portrait}" alt="${name}"></img>
      </figure>`;
}

export function displayPrice(price) {
  // display photographer price
  const galleryDOM = document.querySelector(".profil-likes-price");
  galleryDOM.innerHTML =
    galleryDOM.innerHTML +
    `<article class="profil-like-photograph">
        <div class="profil-likes">
          <span id="profil-likes_heart"></span>
           <i class="fas fa-heart iconeLike"></i>
        </div>
        <div class="profil-price">
          <span id="profil-price-day">${price}€ / jour</span>
        </div>
      </article>`;
}
