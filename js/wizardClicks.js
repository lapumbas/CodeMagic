'use strict';

(() => {
  let wde = window.domelements;
  let wu = window.utils;
  
  let wizardCoatClickHandler = () => {
    wde.wizardCoat.style.fill = wu.getRandomElement(window.data.COAT_COLORS);
  };

  let wizardEyesClickHandler = () => {
    wde.wizardEyes.style.fill = wu.getRandomElement(window.data.EYES_COLORS);
  };

  let wizardFireballClickHandler = () => {
    wde.wizardFireball.style.backgroundColor = wu.getRandomElement(window.data.FIREBALLS_COLORS);
  };

  wde.wizardCoat.addEventListener('click', () => {
    wizardCoatClickHandler();
  });

  wde.wizardEyes.addEventListener('click', () => {
    wizardEyesClickHandler();
  });

  wde.wizardFireball.addEventListener('click', () => {
    wizardFireballClickHandler();
  });
})();