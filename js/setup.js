'use strict';


let wizards = [];
let wde = window.domelements;

const getRandomElement = (arr) => {
  return arr[(Math.floor(Math.random() * arr.length))];
};

for (let i = 0; i < 4; i++) {
  wizards[i] = {};
  wizards[i].name = getRandomElement(window.data.WIZARD_NAMES) + ' ' + getRandomElement(window.data.WIZARD_SURNAMES);
  wizards[i].coatColor = getRandomElement(window.data.COAT_COLORS);
  wizards[i].eyesColor = getRandomElement(window.data.EYES_COLORS);
}



for (let i = 0; i < wizards.length; i++) {
  var template = window.domelements.wizardTemplate.cloneNode(true);
  template.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  template.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  template.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wde.fragment.appendChild(template);
}

wde.similarList.appendChild(wde.fragment);

// **************************************

let setupOpenClickHandler = () => {
  wde.setup.classList.remove('hidden');
};

let setupCloseClickHandler = () => {
  wde.setup.classList.add('hidden');
};

let setupOpenKeydownHandler = (evt) => {
  if (evt.keyCode === 13) wde.setup.classList.remove('hidden');
};

let setupCloseKeydownHandler = (evt) => {
  if (evt.keyCode === 27 && !wde.nameInput.focused) wde.setup.classList.add('hidden');
};

let setupCloseListener = () => {
  wde.setupClose.addEventListener('click', () => {
    setupCloseClickHandler();
  });
  document.addEventListener('keydown', (evt) => {
    setupCloseKeydownHandler(evt);
  });
};

wde.setupOpen.addEventListener('click', (evt) => {
  setupOpenClickHandler();
  setupCloseListener(evt);
});

wde.setupOpen.addEventListener('keydown', (evt) => {
  setupOpenKeydownHandler(evt);
  setupCloseListener(evt);
});

let wizardCoatClickHandler = () => {
  wde.wizardCoat.style.fill = getRandomElement(window.data.COAT_COLORS);
};

let wizardEyesClickHandler = () => {
  wde.wizardEyes.style.fill = getRandomElement(window.data.EYES_COLORS);
};

let wizardFireballClickHandler = () => {
  wde.wizardFireball.style.backgroundColor = getRandomElement(window.data.FIREBALLS_COLORS);
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