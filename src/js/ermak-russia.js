@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')

if(document.querySelector('.swiper-main')) {
    const swiperMain = new Swiper('.swiper-main', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
        },
    })
}

if(document.querySelector('.swiper-main-category')) {
    const swiperMainCategory = new Swiper('.swiper-main-category', {
        slidesPerView: 4,
        grid: {
            fill: 'row',
            rows: 2,
        },
        spaceBetween: 20,
    })
}

if(document.querySelector('.swiper-product-slider')) {
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
        });
    });
}
