// HOMEPAGE => photographers

function photographerFactory(data) {
  // const of photographers datas
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/account/${portrait}`;

  function getUserCardDOM() {
    // link which contains photographer elements
    const article = document.createElement("a");
    // tabIndex for navigation with keyboard
    article.tabIndex = 0;
    article.href = "#";

    // photographer profile image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de profil du photographe");

    // photographer name
    const h2 = document.createElement("h2");
    h2.textContent = name;

    // photographer location => city & country
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;

    // photographer tagline
    const taglineParagraph = document.createElement("p");
    taglineParagraph.textContent = tagline;
    taglineParagraph.setAttribute("class", "photographerTagline");

    // photographer price
    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = price + "€/jour";
    priceParagraph.setAttribute("class", "photographerPrice");

    // article childs
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(taglineParagraph);
    article.appendChild(priceParagraph);

    // go on photographer page = click
    article.addEventListener("click", function () {
      window.location.href = "photographer.html?id=" + id;
    });

    // go on photographer page = keypress event
    article.addEventListener("keypress", function () {
      window.location.href = "photographer.html?id=" + id;
    });

    // return article "photographer"
    return article;
  }
  return { getUserCardDOM };
}
