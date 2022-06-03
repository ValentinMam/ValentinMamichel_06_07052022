// HOMEPAGE => photographers

function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/account/${portrait}`;
  function getUserCardDOM() {
    const article = document.createElement("article");
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

    // article childs
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    return article;
  }
  return { getUserCardDOM };
}
