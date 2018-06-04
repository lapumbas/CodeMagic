'use strict';

(() => {
  let wde = window.domelements;
  let wu = window.utils;

  let wizards = [];
  for (let i = 0; i < 4; i++) {
    wizards[i] = {};
    wizards[i].name = wu.getRandomElement(window.data.WIZARD_NAMES) + ' ' + wu.getRandomElement(window.data.WIZARD_SURNAMES);
    wizards[i].coatColor = wu.getRandomElement(window.data.COAT_COLORS);
    wizards[i].eyesColor = wu.getRandomElement(window.data.EYES_COLORS);
  }

  for (let i = 0; i < wizards.length; i++) {
    var template = wde.wizardTemplate.cloneNode(true);
    template.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    template.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    template.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wde.fragment.appendChild(template);
  }

  wde.similarList.appendChild(wde.fragment);
})();