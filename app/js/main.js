$(function () {

    //slider section team

    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left left-arrow" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="5" y1="12" x2="9" y2="16" /><line x1="5" y1="12" x2="9" y2="8" /></svg>',
        nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right right-arrow" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="15" y1="16" x2="19" y2="12" /><line x1="15" y1="8" x2="19" y2="12" /></svg>'
    });

    //slider testimonials section

    $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,       
        prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left left-arrow" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="5" y1="12" x2="9" y2="16" /><line x1="5" y1="12" x2="9" y2="8" /></svg>',
        nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right right-arrow" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="15" y1="16" x2="19" y2="12" /><line x1="15" y1="8" x2="19" y2="12" /></svg>'
    });


    //tabs section benefits    

    $('.benefits__tab-item').on('click', function (e) {
        e.preventDefault();
        $('.benefits__tab-item').removeClass('benefits__tab-item--active');
        $(this).addClass('benefits__tab-item--active');

        $('.benefits__content-item').removeClass('benefits__content-item--active');
        $($(this).attr('href')).addClass('benefits__content-item--active');
    });


});