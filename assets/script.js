$(document).ready(function(){

    let btnCnt = document.querySelector(".filter-btns");
    let filterThis = [...document.querySelectorAll(".project-flex")];
    let burgerMenu = document.querySelector(".burger_c");
    let secretMenu = document.querySelector(".secret-ul");

    $('.skill-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    });

    btnCnt.addEventListener("click", function (e) {
        if (!e.target.dataset.filter) return;

        if (e.target.classList.contains("btn")) {
            let filter = e.target.dataset.filter;
            [...btnCnt.querySelectorAll("button")].map( button => {
                button.classList.remove("btn--white--active");
            })
            let button = document.querySelector(`[data-filter="${filter}"]`);
            button.classList.toggle("btn--white--active");
            if (filter === "*") {
                animationThing();
            } else {
                animationThing();
                animationRemove(filter);
            }
        }

    });

    burgerMenu.addEventListener("click", function(){
        secretMenu.classList.toggle("secret-ul--show");
        this.classList.toggle("burger_c--active");
    });

    function animationThing() {
        filterThis.map(item => {
            item.classList.remove("display-none");
            item.classList.add("project-flex--fade");
            setTimeout(function () {
                item.classList.remove("project-flex--fade");
            }, 400);
        });
    }

    function animationRemove(filter) {
        filterThis.filter(item => item.dataset.filterName !== filter).map(item => {
            setTimeout(function () {
                item.classList.add("display-none");
            }, 400);
        });
    }
})