
    let btnCnt = document.querySelector(".filter-btns");
    let filterThis = [...document.querySelectorAll(".project-flex")];
    let smoothScroll = [...document.querySelectorAll(".header-menu-li a")];

    $('.skill-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
    });

    btnCnt.addEventListener("click", function (e) {
        if (!e.target.dataset.filter) return;

        if (e.target.classList.contains("btn")) {
            let filter = e.target.dataset.filter;

            function animationThing() {
                filterThis.map(item => {
                    item.classList.remove("display-none");
                    item.classList.add("project-flex--fade");
                    setTimeout(function () {
                        item.classList.remove("project-flex--fade");
                    }, 400);
                });
            }

            function animationRemove() {
                filterThis.filter(item => item.dataset.filterName !== filter).map(item => {
                    setTimeout(function () {
                        item.classList.add("display-none");
                    }, 400);
                });
            }

            if (filter === "*") {
                animationThing();
            } else {
                animationThing();
                animationRemove();
            }
        }

    });

