@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')

if (document.querySelector('.swiper-main-slider')) {
    const swiperMainSlider = new Swiper('.swiper-main-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
}

if (document.querySelector('.swiper-partners-slider')) {
    const swiperPartnersSlider = new Swiper('.swiper-partners-slider', {
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 3,

            },
            640: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            }
        }
    })
}

if (document.querySelector('.swiper-main-category')) {
    const swiperMainCategory = new Swiper('.swiper-main-category', {
        slidesPerView: 4,
        grid: {
            fill: 'row',
            rows: 2,
        },
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 3,

            },
            640: {
                slidesPerView: 4,
            },
        }
    })
}

if (document.querySelector('.swiper-product-slider')) {
    document.querySelectorAll('.product-slider').forEach(n => {
        const swiperProductSlider = new Swiper(n.querySelector('.swiper-product-slider'), {
            slidesPerView: 6,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: n.querySelector('.swiper-button-next'),
                prevEl: n.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,

                },
                480: {
                    slidesPerView: 3,

                },
                640: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
                1160: {
                    slidesPerView: 6,
                }
            }
        });
    });
}
