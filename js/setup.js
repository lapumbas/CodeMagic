'use strict';

(() => {

  let wde = window.domelements;
  let wu = window.utils;

  let setupOpenClickHandler = () => {
    wde.setup.classList.remove('hidden');
  };

  let setupCloseClickHandler = () => {
    wde.setup.classList.add('hidden');
  };

  let setupOpenKeydownHandler = (evt) => {
    if (wu.isEnterPressed(evt)) wde.setup.classList.remove('hidden');
  };

  let setupCloseKeydownHandler = (evt) => {
    if (wu.isESCPressed(evt) && !wde.nameInput.focused) wde.setup.classList.add('hidden');
  };

  let setupCloseListener = () => {
    wde.setupClose.addEventListener('click', () => {
      setupCloseClickHandler();
    });
    document.addEventListener('keydown', (evt) => {
      setupCloseKeydownHandler(evt);
    });
    wde.setup.style.top = null;
    wde.setup.style.left = null;
  };

  wde.setupOpen.addEventListener('click', (evt) => {
    setupOpenClickHandler();
    setupCloseListener(evt);
  });

  wde.setupOpen.addEventListener('keydown', (evt) => {
    setupOpenKeydownHandler(evt);
    setupCloseListener(evt);
  });

  let draggedItem = null;

  const onDragStart = (evt) => {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target.cloneNode();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
    wde.setupArtifactsBag.style.border = '2px dashed red';
  };

  const onDragOver = (evt) => {
    evt.preventDefault();
    return false;
  };
  
  const onDrop = (evt) => {
    if (evt.target.childNodes.length == 0) {
      evt.target.appendChild(draggedItem);
    }
    evt.target.style.backgroundColor = '';
    wde.setupArtifactsBag.style.border = '';
    evt.preventDefault();
  };
  
  const onDragEnter = (evt) => {
    if (evt.target.childNodes.length == 0) {
      evt.target.style.backgroundColor = 'yellow';
    } else {
      evt.target.style.backgroundColor = 'red';
    }
    evt.preventDefault();
  };

  const onDragLeave = (evt) => {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  };
  
  wde.setupArtifactsShop.addEventListener('dragstart', onDragStart);

  wde.setupArtifactsBag.addEventListener('dragover', onDragOver);

  wde.setupArtifactsBag.addEventListener('drop', onDrop);

  wde.setupArtifactsBag.addEventListener('dragenter', onDragEnter);

  wde.setupArtifactsBag.addEventListener('dragleave', onDragLeave);

})();