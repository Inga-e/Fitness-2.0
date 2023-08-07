let accordionToggles = document.querySelectorAll('[data-accordion="button"]');

let isChangeAccordionButtons = function () {
  accordionToggles.forEach(function (element) {
    element.addEventListener('click', function () {

      element.classList.toggle('is-open');

    });
  });
};

export {isChangeAccordionButtons};
