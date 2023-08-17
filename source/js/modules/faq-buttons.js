let accordionToggles = document.querySelectorAll('[data-accordion="button"]');
let accordionItems = document.querySelectorAll('[data-accordion="element"]');
let tabItems = document.querySelectorAll('[data-tabs="control"]');

let isResizePaddingBottom = function () {
  accordionItems.forEach(function (element) {
    if (element) {
      element.classList.add('is-resize-padding-bottom');
    } return;
  });
};

let isChangeTabButtons = function () {
  tabItems.forEach(function (element) {
    element.addEventListener('click', function () {
      if (element) {
        tabItems.forEach(function (el) {
          el.classList.remove('is-open');
        });
        element.classList.add('is-open');
      } return;
    });
  });
};

let isChangeAccordionButtons = function () {
  accordionToggles.forEach(function (element) {
    element.addEventListener('click', function () {
      if (element) {
        element.classList.toggle('is-open');
        element.closest('[data-accordion="element"]').classList.toggle('is-resize-padding-bottom');
      } return;
    });
  });
};

export {isChangeAccordionButtons, isResizePaddingBottom, isChangeTabButtons};
