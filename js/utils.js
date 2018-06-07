'use strict';

(() => {
  window.utils = {
    getRandomElement: (arr) => {
      return arr[(Math.floor(Math.random() * arr.length))];
    },

    isEnterPressed: (evt) => {
      if (evt.keyCode === 13) {
        return true;
      } else {
        return false;
      }
    },
    
    isESCPressed: (evt) => {
      if (evt.keyCode === 27) {
        return true;
      } else {
        return false;
      }
    },
  };
})();