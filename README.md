# Progetto-Js-Advanced

✨ **Funzionalità**
- Tema chiaro/scuro con salvataggio in `localStorage`
- Dark mode gestita tramite `body.dark-mode` con supporto SCSS
- Layout responsive per mobile e desktop
- Struttura piramidale con box quadrate e contenuti visivi
- Recupero asincrono delle notizie tech da Hacker News
- Pulsante "Carica Altre" per il caricamento progressivo delle news
- Effetti visivi con ombre, bordi arrotondati e immagini responsive
- Struttura degli assets organizzata in `assets/img/` secondo convenzione

🖼 **Anteprima**
Apri `index.html` nel browser per vedere la homepage.
Visita anche `news.html` per la sezione notizie in tempo reale.

🌗 **Modalità Scura**
- Attivabile manualmente con il pulsante 🌚/☀️
- La scelta viene salvata in `localStorage` e mantenuta anche dopo il refresh
- Lo stile cambia dinamicamente su tutti gli elementi grazie alle classi e SCSS

🛠 **Tecnologie Usate**
- HTML5
- SCSS modulare (`_style.scss`, `_news.scss`, ecc.)
- JavaScript (Vanilla)
- Fetch API per l'interazione con API esterne
- Responsive Design con Flexbox e media queries

🔌 **API Usata**
Hacker News API:
- Notizie nuove: [`https://hacker-news.firebaseio.com/v0/newstories.json`](https://hacker-news.firebaseio.com/v0/newstories.json)
- Dettagli notizia: [`https://hacker-news.firebaseio.com/v0/item/{id}.json`](https://hacker-news.firebaseio.com/v0/item/{id}.json)

📁 **Struttura Progetto**
├── index.html
├── news.html
├── js/
│ ├── main.js
│ └── news.js
├── scss/
│ ├── _style.scss
│ ├── _news.scss
│ ├── _mixins.scss
│ ├── _variables.scss
│ └── main.scss
├── assets/
│ └── img/


📲 **Istruzioni per l'Uso**
1. Clona o scarica la repo: [`https://github.com/pezzox/Progetto-Js-Advanced`](https://github.com/pezzox/Progetto-Js-Advanced)
2. Apri `index.html` in un browser oppure visita la versione online:
   [`https://pezzox.github.io/Progetto-Js-Advanced/`](https://pezzox.github.io/Progetto-Js-Advanced/)
3. Usa il pulsante in alto a destra per cambiare tema.
4. Visita la sezione News per vedere le notizie in tempo reale.

✍️ **Autori**
Questo progetto è stato realizzato da **Federico Pezzotti** come parte del percorso *Start2Impact*.

---

