@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')

if(document.querySelector('.swiper-main-slider')){
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
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
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

if (document.querySelector('.swiper-main')) {
    const swiperThumbs = new Swiper(".swiper-thumbs", {
        direction: getDirection(),
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 4,
        spaceBetween: 20,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        on: {
            resize: function () {
                swiperThumbs.changeDirection(getDirection());
            }
        }
    });
    const swiperMain = new Swiper(".swiper-main", {
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        thumbs: {
            swiper: swiperThumbs
        },
    });
}

if (document.querySelector('.swiper-search-mob')) {
    const swiperProductSlider = new Swiper('.swiper-search-mob', {
        slidesPerView: 1,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

if(document.querySelector('.swiper-main-articles')){
    const swiperMainArticles = new Swiper('.swiper-main-articles', {
        slidesPerView: 1,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
    })
}

function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 767 ? 'horizontal' : 'vertical';

    return direction;
}

if (document.querySelector('.js-policy-btn')) {
    const policyBtn = document.querySelector('.js-policy-btn')

    policyBtn.addEventListener('click', function (e) {
        e.preventDefault()
        const target = e.currentTarget
        const body = document.querySelector('.privacy-policy__body')
        if (target.classList.contains('active')) {
            target.classList.remove('active')
            target.innerText = 'ЧИТАТЬ ДАЛЕЕ'
            body.classList.remove('show')
        } else {
            target.classList.add('active')
            target.innerText = 'СКРЫТЬ'
            body.classList.add('show')
        }
    })
}


$(function (){
    /*Табы*/
    $('.tabs .tabs__caption li').on('click', function(){
        let name = $(this).children('a').attr('href');
        if(!$(this).hasClass('active')){
            $('.tabs li').removeClass('active');
            $(this).addClass('active');

            $('.tabs__content').removeClass('active');
            $(name).addClass('active');
        }
    });

    $('.footer__menu-btn').on('click', function (){
        $('.menu-mob-footer').toggleClass('show')
        $('.menu-mob-header').removeClass('show')
        $('.search-mob-header').removeClass('show')
        $('body').toggleClass('lock')


    })
    $('.header__menu-btn').on('click', function (){
        $('.menu-mob-header').toggleClass('show')
        $('.menu-mob-footer').removeClass('show')
        $('.search-mob-header').removeClass('show')
        $('body').toggleClass('lock')

    })
    $('.header__search-btn').on('click', function (){
        $('.search-mob-header').toggleClass('show')
        $('.menu-mob-header').removeClass('show')
        $('.menu-mob-footer').removeClass('show')
        $('body').toggleClass('lock')

    })

    $('.js-map-open').on('click', function (){
        $('.ermak-center-map__map').toggleClass('show')
    })

    if ($('.form-contacts .form-control').length > 0){
        formLabel($('.form-contacts .form-control'))
    }
})

function formLabel(formInput){
    formInput.each( function (){
        if(!$(this).val() == ''){
            $(this).parent('.form-group').find('.form-label').addClass('hide')
        }
        let input = $(this)
        let label = input.parent('.form-group').find('.form-label')
        $(this).on('focus', function (){
            let textarea = $(this)[0].nodeName
            if(textarea == 'TEXTAREA'){
            }else{
                label.addClass('hide')
            }
        })
        $(this).on('blur', function (){
            if(!input.val()>0){
                label.removeClass('hide')
            }
        })
    })
}


