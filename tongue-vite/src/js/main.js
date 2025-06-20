import '../scss/main.scss';
import { setupThemeToggle } from './theme.js';

import heroImg from '../assets/img/hero.jpg';
import ideaImg from '../assets/img/idea.jpg';
import visionImg from '../assets/img/vision.jpg';
import missionImg from '../assets/img/mission.jpg';
import teamImg from '../assets/img/team.jpg';
import eventiImg from '../assets/img/eventi.jpg';


document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();

  // ✅ Sostituisci dinamicamente le immagini (se già esistono nel DOM)
  const hero = document.querySelector('.hero img');
  if (hero) hero.src = heroImg;

  const images = [
    { selector: '.top-row .box:nth-of-type(1) img', src: ideaImg },
    { selector: '.top-row .box:nth-of-type(2) img', src: visionImg },
    { selector: '.top-row .box:nth-of-type(3) img', src: missionImg },
    { selector: '.bottom-row .box:nth-of-type(1) img', src: teamImg },
    { selector: '.bottom-row .box:nth-of-type(2) img', src: eventiImg },
];


  images.forEach(({ selector, src }) => {
    const img = document.querySelector(selector);
    if (img) img.src = src;
  });
});
