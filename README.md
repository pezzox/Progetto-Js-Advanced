# Progetto JS Advanced – TONGUE 📰

Un'applicazione responsive sviluppata in JavaScript moderno che simula una piattaforma di informazione tech in tempo reale. Il progetto include un sistema di **dark mode**, caricamento dinamico di contenuti tramite **API Hacker News**, gestione modulare con **SCSS**, e bundling tramite **Vite**.

---

## ✨ Funzionalità

- Modalità chiaro/scuro attivabile manualmente con salvataggio in `localStorage`
- Tema gestito via classi CSS (es. `body.dark-mode`) e SCSS
- Layout responsive mobile-first con Flexbox e media queries
- Struttura visiva a griglia con box quadrate e immagini dinamiche
- Caricamento asincrono di notizie tech da Hacker News API
- Pulsante "Carica altre" per caricare più notizie a richiesta
- Effetti visivi curati: ombre, bordi arrotondati, immagini responsive
- Gestione dinamica delle immagini "hero" via JavaScript
- Organizzazione moderna dei file e gestione asset ottimizzata
- Code splitting e asset bundling con **Vite**

---

## 🖼 Anteprima

- Apri `index.html` per visualizzare la homepage
- Visita `news.html` per accedere alla sezione con notizie aggiornate

Oppure vai alla versione deployata:  
🔗 [https://pezzox.github.io/Progetto-Js-Advanced/](https://pezzox.github.io/Progetto-Js-Advanced/)

---

## 🌗 Modalità Scura

- Attivabile con l’interruttore 🌚/☀️ nella navbar
- La preferenza viene salvata in `localStorage`
- Il tema si applica dinamicamente via classi CSS
- Gestione centralizzata tramite `setupThemeToggle()` in `theme.js`

---

## 🛠 Tecnologie Utilizzate

- ✅ **HTML5** semantico
- 🎨 **SCSS** modulare (`_style.scss`, `_news.scss`, `_mixins.scss`, `_variables.scss`)
- ⚡ **JavaScript moderno (ES Modules)**
- 🌐 **Axios** per chiamate API
- 🛠 **Lodash (debounce)** per ottimizzare interazioni
- 🛠 **Vite** per sviluppo locale e build di produzione
- 📱 **Responsive Design** (Flexbox + media queries)

---

## 🔌 API Utilizzata

**Hacker News API**:

- 📥 [Elenco notizie nuove](https://hacker-news.firebaseio.com/v0/newstories.json)
- 📄 [Dettaglio singola notizia](https://hacker-news.firebaseio.com/v0/item/{id}.json)

---

## 📁 Struttura del Progetto

├── index.html
├── news.html
├── vite.config.js
├── package.json
├── src/
│ ├── js/
│ │ ├── main.js
│ │ ├── news.js
│ │ ├── theme.js
│ │ └── init.js
│ └── scss/
│ ├── _style.scss
│ ├── _news.scss
│ ├── _mixins.scss
│ ├── _variables.scss
│ └── main.scss
├── public/
│ └── images/
│ ├── hero.jpg
│ └── news-hero.jpg

yaml
Copia
Modifica

---

## 📲 Istruzioni per l'Uso
https://pezzox.github.io/Progetto-Js-Advanced/
🧪 Interagisci con il sito
Usa il pulsante 🌚/☀️ per attivare la modalità scura

Visita la pagina News per caricare e leggere notizie in tempo reale

✍️ Autore
Progetto realizzato da Federico Pezzotti
💼 Parte del percorso formativo Start2Impact
