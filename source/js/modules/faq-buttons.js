let accordionToggles = document.querySelectorAll('[data-accordion="button"]');
let accordionItems = document.querySelectorAll('[data-accordion="element"]');

let isResizePaddingBottom = function () {
  accordionItems.forEach(function (element) {

    element.classList.add('is-resize-padding-bottom');

  });
};

let isChangeAccordionButtons = function () {
  accordionToggles.forEach(function (element) {
    element.addEventListener('click', function () {

      element.classList.toggle('is-open');
      element.closest('[data-accordion="element"]').classList.toggle('is-resize-padding-bottom');

    });
  });
};

export {isChangeAccordionButtons, isResizePaddingBottom};
