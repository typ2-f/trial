function getBgImgHeight() {
  const bg_imgs = $(".section__bg-img");
  $(bg_imgs).each(function () {
    const h = $(this).height();
    $(this).parent().css('height', h);
    console.log(h);
  });
}
$(window).on('load', getBgImgHeight);
$(window).resize(getBgImgHeight);
