'use strict';

(function () {

  let wde = window.domelements;

  wde.setupUserPic.addEventListener('mousedown', evt => {
    evt.preventDefault();

    let startCursorCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      let shift = {
        x: startCursorCoords.x - moveEvt.clientX,
        y: startCursorCoords.y - moveEvt.clientY
      };
      startCursorCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      wde.setup.style.top = `${wde.setup.offsetTop - shift.y}px`;
      wde.setup.style.left = `${wde.setup.offsetLeft - shift.x}px`;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();