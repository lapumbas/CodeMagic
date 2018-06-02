const WIZARD_NAMES = [
  'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'
];
const WIZARD_SURNAMES = [
  'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'
];
const COAT_COLORS = [
  'rgb(101,137,164)', 'rgb(241, 43, 107)', 'rgb(146,100,161)', 'rgb(56, 159, 117)', 'rgb(215,210,55)', 'rgb(0,0,0)'
];
const EYES_COLORS = [
  'black', 'red', 'blue', 'yellow', 'green'
];

const FIREBALLS_COLORS = [
  '#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'
];

let setup = document.querySelector('.setup');
let setupOpen = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');
let nameInput = document.querySelector('.setup-user input[name="username"]');
let wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
let wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
let wizardFireball = document.querySelector('.setup-fireball-wrap');

let wizards = [];

const getRandomElement = (arr) => {
  return arr[(Math.floor(Math.random() * arr.length))];
};

for (let i = 0; i < 4; i++) {
  wizards[i] = {};
  wizards[i].name = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
  wizards[i].coatColor = getRandomElement(COAT_COLORS);
  wizards[i].eyesColor = getRandomElement(EYES_COLORS);
}

let wizardTemplate = document.querySelector('#similar-wizard-template').content;
let similarList = document.querySelector('.setup-similar-list');

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  var template = wizardTemplate.cloneNode(true);
  template.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  template.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  template.querySelector('.setup-similar-label').textContent = wizards[i].name;
  fragment.appendChild(template);
}

similarList.appendChild(fragment);

// **************************************

let setupOpenClickHandler = () => {
  setup.classList.remove('hidden');
};

let setupCloseClickHandler = () => {
  setup.classList.add('hidden');
};

let setupOpenKeydownHandler = (evt) => {
  if (evt.keyCode === 13) setup.classList.remove('hidden');
};

let setupCloseKeydownHandler = (evt) => {
  if (evt.keyCode === 27 && !nameInput.focused) setup.classList.add('hidden');
};

let setupCloseListener = () => {
  setupClose.addEventListener('click', () => {
    setupCloseClickHandler();
  });
  document.addEventListener('keydown', (evt) => {
    setupCloseKeydownHandler(evt);
  });
};

setupOpen.addEventListener('click', (evt) => {
  setupOpenClickHandler();
  setupCloseListener(evt);
});

setupOpen.addEventListener('keydown', (evt) => {
  setupOpenKeydownHandler(evt);
  setupCloseListener(evt);
});

let wizardCoatClickHandler = () => {
  wizardCoat.style.fill = getRandomElement(COAT_COLORS);
};

let wizardEyesClickHandler = () => {
  wizardEyes.style.fill = getRandomElement(EYES_COLORS);
};

let wizardFireballClickHandler = () => {
  wizardFireball.style.backgroundColor = getRandomElement(FIREBALLS_COLORS);
};

wizardCoat.addEventListener('click', () => {
  wizardCoatClickHandler();
});

wizardEyes.addEventListener('click', () => {
  wizardEyesClickHandler();
});

wizardFireball.addEventListener('click', () => {
  wizardFireballClickHandler();
});