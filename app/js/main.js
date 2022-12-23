$(function () {

    $('.benefits__tab-item').on('click', function (e) {
        e.preventDefault();
        $('.benefits__tab-item').removeClass('benefits__tab-item--active');
        $(this).addClass('benefits__tab-item--active');

        $('.benefits__content-item').removeClass('benefits__content-item--active');
        $($(this).attr('href')).addClass('benefits__content-item--active');
    });


});