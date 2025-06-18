import axios from 'axios';
import debounce from 'lodash/debounce';
import { setupThemeToggle } from './theme.js';
import '../scss/main.scss';
import newsHeroImg from '../assets/img/news-hero.jpg';

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();

  // ✅ Inserisce dinamicamente l'immagine hero
  const heroImg = document.querySelector('.hero img');
  if (heroImg) heroImg.src = newsHeroImg;

  const newsContainer = document.getElementById("news-container");
  const loadMoreBtn = document.getElementById("load-more");
  const loader = document.getElementById("loader");

  let newsIds = [];
  let currentIndex = 0;
  const batchSize = 10;

  async function fetchNewsIds() {
    try {
      const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
      newsIds = response.data;
      loadMoreNews();
    } catch (error) {
      console.error("Errore nel recupero degli ID delle news:", error);
    }
  }

  async function fetchNewsDetails(id) {
    try {
      const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return response.data;
    } catch (error) {
      console.error(`Errore nel recupero della news con ID ${id}`, error);
    }
  }

  async function loadMoreNews() {
    loader.style.display = "block";
    const newsBatch = newsIds.slice(currentIndex, currentIndex + batchSize);
    const newsDetails = await Promise.all(newsBatch.map(fetchNewsDetails));
    loader.style.display = "none";

    newsDetails.forEach(news => {
      if (news) {
        const newsElement = document.createElement("div");
        newsElement.classList.add("news-item");

        newsElement.innerHTML = `
          <h3><a href='${news.url}' target='_blank'>${news.title}</a></h3>
          <p>${new Date(news.time * 1000).toLocaleDateString()}</p>
          <a class="read-more" href="${news.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsElement);
      }
    });

    currentIndex += batchSize;
    if (currentIndex >= newsIds.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  const debouncedLoad = debounce(loadMoreNews, 300);
  loadMoreBtn.addEventListener("click", debouncedLoad);

  fetchNewsIds();
});

