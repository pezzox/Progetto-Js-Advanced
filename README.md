# Progetto JS Advanced – TONGUE 📰

Un'applicazione responsive in JavaScript moderno che simula una piattaforma di informazione tech in tempo reale. Il progetto include un sistema di **dark mode**, caricamento dinamico di contenuti tramite **API Hacker News**, gestione modulare con **SCSS** e **Vite** come bundler.

---

## ✨ Funzionalità

- Modalità chiaro/scuro attivabile manualmente, con salvataggio in `localStorage`
- Tema scuro gestito via classe `body.dark-mode` con supporto SCSS
- Layout responsive mobile-first con Flexbox e media queries
- Struttura visiva a griglia con box quadrate e immagini dinamiche
- Caricamento asincrono di notizie tech da Hacker News
- Pulsante "Carica Altre" con caricamento incrementale delle news
- Effetti visivi curati (ombre, bordi arrotondati, immagini responsive)
- Gestione delle immagini hero dinamica tramite JavaScript
- Organizzazione pulita di file e asset secondo convenzioni moderne
- Code splitting e bundling con **Vite**

---

## 🖼 Anteprima

Apri `index.html` nel browser per visualizzare la homepage.  
Visita `news.html` per accedere alla sezione con notizie in tempo reale.

---

## 🌗 Modalità Scura

- Attivabile con il pulsante 🌚/☀️ nella navbar
- La scelta viene salvata automaticamente in `localStorage`
- Tema applicato dinamicamente via classi, riflesso in tutte le pagine
- Inizializzazione centralizzata tramite funzione `setupThemeToggle()`

---

## 🛠 Tecnologie Utilizzate

- **HTML5** semantico
- **SCSS** modulare (`_style.scss`, `_news.scss`, `_mixins.scss`, `_variables.scss`)
- **JavaScript moderno (ES Modules)**
- **Axios** per chiamate API
- **Lodash (debounce)** per ottimizzazione interazioni
- **Vite** per bundling, asset loading e sviluppo locale rapido
- **Responsive design** con Flexbox e media queries

---

## 🔌 API Utilizzata

**Hacker News API**:
- 📥 [Elenco notizie nuove](https://hacker-news.firebaseio.com/v0/newstories.json)
- 📄 [Dettaglio singola notizia](https://hacker-news.firebaseio.com/v0/item/{id}.json)

---

## 📁 Struttura del Progetto

├── index.html
├── news.html
├── src/
│ ├── js/
│ │ ├── main.js
│ │ ├── news.js
│ │ ├── theme.js
│ │ └── init.js
│ ├── scss/
│ │ ├── _style.scss
│ │ ├── _news.scss
│ │ ├── _mixins.scss
│ │ ├── _variables.scss
│ │ └── main.scss

yaml
Copia
Modifica

---

## 📲 Istruzioni per l'Uso

1. Clona o scarica la repository:
   ```bash
   git clone https://github.com/pezzox/Progetto-Js-Advanced
   cd Progetto-Js-Advanced
Installa le dipendenze:

bash
Copia
Modifica
npm install
Avvia l'ambiente di sviluppo:

bash
Copia
Modifica
npm run dev
Oppure visita la versione online:
https://pezzox.github.io/Progetto-Js-Advanced/

Interagisci con il sito:

Usa il pulsante 🌚/☀️ per cambiare tema

Scorri e carica notizie dalla sezione News

✍️ Autore
Progetto realizzato da Federico Pezzotti
Come parte del percorso formativo Start2Impact.
