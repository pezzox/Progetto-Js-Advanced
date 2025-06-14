document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const newsContainer = document.getElementById("news-container");
  const loadMoreBtn = document.getElementById("load-more");
  const loader = document.getElementById("loader");
  let newsIds = [];
  let currentIndex = 0;
  const batchSize = 10;

  // 🔁 Gestione dark mode
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  toggleButton?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });

  // 🔄 Recupera ID delle news
  async function fetchNewsIds() {
    try {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
      newsIds = await response.json();
      loadMoreNews();
    } catch (error) {
      console.error("Errore nel recupero degli ID delle news:", error);
    }
  }

  // 📥 Recupera dettagli singola news
  async function fetchNewsDetails(id) {
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return await response.json();
    } catch (error) {
      console.error(`Errore nel recupero della news con ID ${id}`, error);
    }
  }

  // ➕ Carica notizie a blocchi
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

  loadMoreBtn.addEventListener("click", loadMoreNews);
  fetchNewsIds();
});
