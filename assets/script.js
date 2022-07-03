const burgerMenu = document.querySelector(".burger");

$('.skill-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
});

if(burgerMenu){
    burgerMenu.addEventListener("click", function(){
        const parent = this.closest('.header');
        parent.getAttribute('open') === 'false' ? parent.setAttribute('open', true) : parent.setAttribute('open', false);;
    });
}