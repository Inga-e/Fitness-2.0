const swiperFeedback = function () {
  // eslint-disable-next-line
  new Swiper('.feedback__swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
  });
};
export {swiperFeedback};
