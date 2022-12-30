$(function () {

  $('.program__content-item').on('click', function () {
    $('.program__content-item').removeClass('active');
    $(this).addClass('active');
    
    // if ('.program__content-item'.hasClass('active')) {
    //   $('.program-item__descr'.scrollHeight + 'px');
    // } 
    // if ('.program__content-item'.hasClass ('active')) {
    //   $('program-item__descr').slideDown();
    // }
  });

//   const btns = document.querySelectorAll('.program__content-item');
// const content = document.querySelectorAll('.program-item__descr');

// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         btns.forEach((btnItem) => {
//             btnItem.classList.remove('.program__content-item--active');
//         });

//         btnItem.classList.add('.program__content-item--active');

//         content.forEach((contentItem) => {
//             contentItem.classList.add('hidden');
//         });
      

//         content[index].classList.remove('hidden');
//     });
// });


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
    dots: true,
    prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left left-arrow" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="5" y1="12" x2="9" y2="16" /><line x1="5" y1="12" x2="9" y2="8" /></svg>',
    nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right right-arrow" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /><line x1="15" y1="16" x2="19" y2="12" /><line x1="15" y1="8" x2="19" y2="12" /></svg>'
  });

  
  $('.other-courses__slider').slick({
    infinite: true,
    slidesToShow: 2,
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


  if ($(".courses-list__content").length) {
    let mixer = mixitup(".courses-list__content");
  }

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.discount__counter-days');
    const hoursSpan = clock.querySelector('.discount__counter-hours');
    const minutesSpan = clock.querySelector('.discount__counter-mins');
    const secondsSpan = clock.querySelector('.discount__counter-sec');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.discount__counter-list').attr('data-time');
  initializeClock('counter', deadline);








});