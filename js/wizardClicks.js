'use strict';

(() => {
  let wde = window.domelements;

  function fillColor(elem, color) {
    elem.style.fill = color;
  }

  function fillBackground(elem, color) {
    elem.style.backgroundColor = color;
  }

  window.colorizeElement(wde.wizardCoat, window.data.COAT_COLORS, fillColor);
  window.colorizeElement(wde.wizardEyes, window.data.EYES_COLORS, fillColor);
  window.colorizeElement(wde.wizardFireball, window.data.FIREBALLS_COLORS, fillBackground);


})();