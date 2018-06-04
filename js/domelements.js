'use strict';

(() => {
  window.domelements = {
    setup: document.querySelector('.setup'),
    setupOpen: document.querySelector('.setup-open'),
    setupClose: document.querySelector('.setup-close'),
    nameInput: document.querySelector('.setup-user input[name="username"]'),
    wizardCoat: document.querySelector('.setup-wizard .wizard-coat'),
    wizardEyes: document.querySelector('.setup-wizard .wizard-eyes'),
    wizardFireball: document.querySelector('.setup-fireball-wrap'),
    wizardTemplate: document.querySelector('#similar-wizard-template').content,
    similarList: document.querySelector('.setup-similar-list'),
    fragment: document.createDocumentFragment()
  };

})();