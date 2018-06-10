(() => {
  window.colorizeElement = function (elem, colors, callback) {
    let prevTimer;
    elem.addEventListener('click', () => {
      let color = window.utils.getRandomElement(colors);
      callback(elem, color);

      window.clearTimeout(prevTimer);
      prevTimer = window.setTimeout(() => {
        window.sortWizards(window.wizards);
      }, 500);

    });

  };
})();