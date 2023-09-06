const videoViewPort = document.querySelector('[data-iframe="play"]');
const videoButton = document.querySelector('[data-video-button]');
const videoImage = document.querySelector('[data-image-video]');

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function onDocumentKeydown() {
  if (isEscapeKey) {
    closeVideo();
  }
}

function openVideo() {
  videoButton.onclick = function () {
    if (videoViewPort) {
      videoViewPort.classList.add('is-shown');
      videoImage.classList.add('is-hidden');
      videoViewPort.src += '&autoplay=1';
    } return;
  };

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeVideo() {
  videoViewPort.classList.remove('is-shown');
  videoImage.classList.remove('is-hidden');
  videoViewPort.src -= '&autoplay=1';
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openVideo};
