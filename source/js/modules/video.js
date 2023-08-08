const isEscapeKey = (evt) => evt.key === 'Escape';

const videoViewPort = document.querySelector('[data-iframe="play"]');
const videoButton = document.querySelector('[data-video-button]');
const videoImage = document.querySelector('[data-image-video]');

const onDocumentKeydown = () => {
  if (isEscapeKey) {
    closeVideo();
  }
};

function openVideo() {
  videoButton.onclick = function () {
    videoViewPort.classList.add('is-shown');
    videoImage.classList.add('is-hidden');
  }

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeVideo() {
  videoViewPort.classList.remove('is-shown');
  videoImage.classList.remove('is-hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openVideo};
