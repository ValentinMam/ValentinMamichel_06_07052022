// ================== HOME PAGE

export function photographerFactory(data) {
  // const of photographers datas
  const { name, portrait, tagline, city, country, price, id } = data;

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
    const my1p = document.createElement("p");
    my1p.textContent = tagline;

    // photographer price
    const my2p = document.createElement("p");
    my2p.textContent = price + "€/jour";
    my2p.setAttribute("class", "myPrice");

    // article childs
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(my1p);
    article.appendChild(my2p);

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

// ================== PHOTOGRAPHER PAGE -- HEADER SOON

const modalbg = document.querySelector(".bground");
