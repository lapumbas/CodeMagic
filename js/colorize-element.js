(()=>{

  
  window.colorizeElement = function(elem, colors, callback) {
    elem.addEventListener('click', ()=>{
      callback(elem, window.utils.getRandomElement(window.data.COAT_COLORS));
    });



  };

})();