export function photographerFactory(data) {
  // photographer datas
  const { name, portrait, city, country, tagline, price, id } = data;

  // photographer picture
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // create user card
    const article = document.createElement("article");
    // create link
    const divPresentation = document.createElement("a");
    divPresentation.setAttribute("href", `photographer.html?id=${id}`);
    divPresentation.setAttribute("aria-label", name);
    divPresentation.setAttribute("class", "presentation");
    // create parent element
    const divDescription = document.createElement("div");
    divDescription.setAttribute("class", "description");
    // create picture
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "");
    // create name
    const h2 = document.createElement("h2");
    h2.textContent = name;
    //  create city + country
    const p1 = document.createElement("p");
    p1.textContent = city + ", " + country;
    p1.setAttribute("class", "location");
    // create tagline
    const p2 = document.createElement("p");
    p2.textContent = tagline;
    p2.setAttribute("class", "tag");
    // create price
    const p3 = document.createElement("p");
    p3.textContent = price + " €/jour";
    p3.setAttribute("class", "price");

    // append elements previously created "presentation"
    article.appendChild(divPresentation);
    divPresentation.appendChild(img);
    divPresentation.appendChild(h2);
    // append elements previously created "description"
    article.appendChild(divDescription);
    divDescription.appendChild(p1);
    divDescription.appendChild(p2);
    divDescription.appendChild(p3);

    return article;
  }
  return { name, picture, city, id, getUserCardDOM };
}
