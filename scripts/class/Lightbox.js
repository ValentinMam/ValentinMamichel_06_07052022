// lightbox

export class Lightbox {
  static init() {
    // array of all medias
    const links = Array.from(
      document.querySelectorAll(
        'section.wrapper img[src$=".jpg"], section.wrapper video source[src$=".mp4"]'
      )
    );
    // array of all titles of medias
    const linksTitles = Array.from(
      document.querySelectorAll(".galleryDescription h2")
    );
    let title = [];
    for (let i = 0; i < linksTitles.length; i++) {
      title.push(linksTitles[i].textContent);
    }

    const galleryLightbox = links.map((link) => link.getAttribute("src"));
    const gallery = document.querySelectorAll(".gallery");

    // for each link in the gallery
    gallery.forEach((link) => {
      const imagetest = link.querySelector("a");
      imagetest.addEventListener("click", (e) => {
        e.preventDefault();
        const source = imagetest.querySelector("[src]").getAttribute("src");
        const test = link.querySelector("h2").textContent;
        // new lightbox
        new Lightbox(source, galleryLightbox, test, title);
        const tabHidden = document.querySelectorAll("header, main");
        tabHidden.forEach((elt) => (elt.style.display = "none"));
      });
    });
  }

  // constructor of lightbox
  constructor(urlImage, images, urlTitre, titres, video) {
    this.element = this.buildDOM(urlImage);
    this.images = images;
    this.loadImage(urlImage, urlTitre);
    this.video = video;
    this.title = titres;
    this.loadTitle(urlTitre);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);

    document.addEventListener("keyup", this.onKeyUp);
  }

  loadImage(url, title) {
    const main = document.getElementById("main");
    main.ariaHidden = true;
    this.url = null;
    const image = document.createElement("img");
    image.setAttribute("role", "img");
    const video = document.createElement("video");
    const container = this.element.querySelector(".lightbox__container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    container.appendChild(loader);
    container.removeChild(loader);
    video.setAttribute("controls", "");
    image.classList.add("cardsImage");
    image.setAttribute("alt", title);
    image.setAttribute("aria-label", title);
    video.classList.add("video");
    this.url = url;
    let extensionsMedias = [];
    for (let i = 0; i < this.images.length; i++) {
      // Split the url to get the extension of the file
      extensionsMedias[i] = this.images[i].split(".").pop();
      // If the extension is jpg, we create an image
      if (this.url.split(".").pop() === "jpg") {
        container.appendChild(image);
        image.src = url;
      }
      // If the extension is mp4, we create a video
      if (this.url.split(".").pop() === "mp4") {
        container.appendChild(video);
        video.src = url;
      }
    }
  }
  loadTitle(url) {
    this.urlTitle = null;
    this.urlTitle = url;
    const container = this.element.querySelector(".lightbox__container");
    const title = document.createElement("h2");
    title.classList.add("cardsTitle");
    container.appendChild(title);
    title.innerHTML = this.urlTitle;
  }

  // keyboard lightbox CLOSE / NEXT / PREVIOUS
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  // close lightbox
  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this.onKeyUp);
    const tabHidden = document.querySelectorAll("header, main");
    tabHidden.forEach((elt) => (elt.style.display = "block"));
  }

  // next lightbox
  next(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === this.images.length - 1) {
      i = -1;
    }
    this.loadImage(this.images[i + 1], this.title[i + 1]);

    let t = this.title.findIndex((element) => element === this.urlTitle);
    if (t === this.title.length - 1) {
      i = -1;
    }
    this.loadTitle(this.title[i + 1]);
  }

  //  previous lightbox
  prev(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === 0) {
      i = this.images.length;
    }
    this.loadImage(this.images[i - 1], this.title[i - 1]);

    let t = this.title.findIndex((element) => element === this.urlTitle);
    if (t === 0) {
      i = this.title.length;
    }
    this.loadTitle(this.title[i - 1]);
  }

  //  lightbox  CLOSE / NEXT / PREVIOUS HTML
  buildDOM() {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");

    dom.innerHTML = `<button class="lightbox__close">Fermer</button>
    <button class="lightbox__prev">Précédent</button>
    <button class="lightbox__next">Suivant</button>
    <div class="lightbox__container">
    </div>`;

    dom
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));
    dom
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));
    dom
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));
    return dom;
  }
}

document.addEventListener("keydown", (e) => {
  const nextBtn = document.querySelector(".lightbox__next");
  const ligthboxClose = document.querySelector(".lightbox__close");
  if (e.key === "Tab") {
    if (document.activeElement === nextBtn) {
      e.preventDefault();
      ligthboxClose.focus();
    }
  }
});
