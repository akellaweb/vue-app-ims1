$(document).ready(() => {
  /* ==== Preloader ==== */
  $('.spinner').fadeOut('slow');
  $('.preloader').delay(350).fadeOut();

  const tabContainers = $('.tabs-content .tab-content');

  tabContainers.hide().filter(':first').show();

  $('.tabs-link a').click(function () {
    tabContainers.hide();
    tabContainers.filter(this.hash).fadeIn();
    $('.tabs-link a').removeClass('selected');
    $(this).addClass('selected');
    return false;
  }).filter(':first').click();

  /* ==== Button toggle ==== */
  $('.toggle-nav').click(function () {
    $(this).toggleClass('active');
    $('.mb-nav').toggleClass('active');
  });

  $('.main-menu a').click(function () {
    const speed = 800;
    const { top } = $(`#${$(this).attr('href').substring(1)}`).offset();
    $('html, body').animate({ scrollTop: top - 80 }, speed);
    return false;
  });

  $('.mb-nav a').click(function () {
    const speed = 800;
    $(this).closest('.mb-nav').removeClass('active');
    $('.toggle-nav').removeClass('active');
    const { top } = $(`#${$(this).attr('href').substring(1)}`).offset();
    $('html, body').animate({ scrollTop: top - 50 }, speed);
    return false;
  });

  $('.order-call').click(() => {
    $('.layer-bg').fadeIn();
    $('.popup').fadeIn();
  });

  $('.pp-close').click(() => {
    $('.layer-bg').fadeOut();
    $('.popup').fadeOut();
  });

  $('.layer-bg').click(function () {
    $(this).fadeOut();
    $('.popup').fadeOut();
  });

  $('.phone').each(function () {
    $(this).mask('+7(999)-999-99-99', { autoсlear: false });
  });

  $('.ordercall').validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: "<span class='error-up'>Укажите Ваше имя</span>",
      phone: "<span class='error-up'>Укажите Ваш телефон</span>",
    },
  });

  const closeAlert = function () {
    $('.success-send').fadeOut();
  };

  const options = {
    url: 'ajax/send.php',
    success() {
      $('.success-send').fadeIn();
      setTimeout(closeAlert, 3000);
    },
    clearForm(responseText, xhr) {
      if (errorMessages.responseText.length > 0) { false; } else { true; }
    },
  };
  $('.ordercall').ajaxForm(options);
});
