'use strict';

(() => {
  let wde = window.domelements;
  let wu = window.utils;
  window.wizards = [];
  window.generateWizards = function () {
    for (let i = 0; i < 24; i++) {
      window.wizards[i] = {};
      window.wizards[i].name = wu.getRandomElement(window.data.WIZARD_NAMES) + ' ' + wu.getRandomElement(window.data.WIZARD_SURNAMES);
      window.wizards[i].coatColor = wu.getRandomElement(window.data.COAT_COLORS);
      window.wizards[i].eyesColor = wu.getRandomElement(window.data.EYES_COLORS);
    }
  };

  window.generateWizards();

  window.sortWizards = function (wizards) {
    let rankedWizards = [];
    rankedWizards = wizards.map(item => {
      item.rank = 0;
      if (item.coatColor == wde.wizardCoat.style.fill) {
        item.rank += 2;
      }
      if (item.eyesColor == wde.wizardEyes.style.fill) {
        item.rank += 1;
      }
      return item;
    }).sort((item1, item2) => {
      if (item1.rank > item2.rank) {
        return -1;
      } else if (item1.rank < item2.rank) {
        return 1;
      } else {
        return 0;
      }
    });
    window.similarWizards(rankedWizards);
  };

  window.similarWizards = function (arr) {
    while(wde.similarList.firstChild) {
      wde.similarList.removeChild(wde.similarList.firstChild);
    }
    for (let i = 0; i < 4; i++) {
      var template = wde.wizardTemplate.cloneNode(true);
      template.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
      template.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
      template.querySelector('.setup-similar-label').textContent = arr[i].name;
      wde.fragment.appendChild(template);
    }
    wde.similarList.appendChild(wde.fragment);
  };


})();