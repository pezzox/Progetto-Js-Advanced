import axios from "axios";
import debounce from "lodash/debounce";
import { setupThemeToggle } from "./theme.js";
import "../scss/main.scss";
import newsHero from "../assets/img/news-hero.jpg"; // Assicurati che esista

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();

  // ✅ Imposta correttamente l'immagine dell'hero della pagina news
  const heroImg = document.querySelector("#hero-img");
  if (heroImg) heroImg.src = newsHero;

  const newsContainer = document.getElementById("news-container");
  const loadMoreBtn = document.getElementById("load-more");
  const loader = document.getElementById("loader");

  let newsIds = [];
  let currentIndex = 0;
  const batchSize = 10;

  const fetchNewsIds = async () => {
    try {
      const { data } = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
      newsIds = data;
      loadMoreNews();
    } catch (error) {
      console.error("Errore durante il recupero degli ID:", error);
    }
  };

  const fetchNewsDetails = async (id) => {
    try {
      const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return data;
    } catch (error) {
      console.error("Errore nel recupero dettagli notizia ID:", id, error);
      return null;
    }
  };

  const loadMoreNews = async () => {
    if (!newsContainer) return;

    loader.style.display = "block";

    const batch = newsIds.slice(currentIndex, currentIndex + batchSize);
    try {
      const newsItems = await Promise.all(batch.map(fetchNewsDetails));
      newsItems.forEach((item) => {
        if (!item) return;

        const card = document.createElement("div");
        card.className = "news-item";

        card.innerHTML = `
          <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
          <p>${new Date(item.time * 1000).toLocaleDateString()}</p>
          <a class="read-more" href="${item.url}" target="_blank">Leggi di più</a>
        `;

        newsContainer.appendChild(card);
      });

      currentIndex += batchSize;
      if (currentIndex >= newsIds.length) {
        loadMoreBtn.style.display = "none";
      }
    } catch (error) {
      console.error("Errore durante il caricamento del batch:", error);
    } finally {
      loader.style.display = "none";
    }
  };

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", debounce(loadMoreNews, 300));
  }

  fetchNewsIds();
});
