let coachesCards = document.querySelectorAll('[data-slider-trainer]');

let isShowCoachesDescription = function () {
  coachesCards.forEach(function (element) {
    element.addEventListener('click', function () {
      if (element) {
        element.classList.toggle('active');
      } return;
    });
  });
};

export {isShowCoachesDescription};
