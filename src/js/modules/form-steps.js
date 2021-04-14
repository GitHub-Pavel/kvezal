import $ from 'jquery';
import steps from './jquery.steps';
import { valid, validate } from 'jquery-validation';

export default $(function() {
  const form = $('.steps-form');
  const nextInClass = 'animate__fadeInRight';
  const prevInClass = 'animate__fadeInLeft';
  const nextOutClass = 'animate__fadeOutLeft';
  const prevOutClass = 'animate__fadeOutRight';
  const removeRowAnimateClass = () => {
    const rows = $('.steps-form__row');
    rows.removeClass(nextInClass);
    rows.removeClass(prevInClass);
    rows.removeClass(nextOutClass);
    rows.removeClass(prevOutClass);
  }
  const nextStep = () => {
    removeRowAnimateClass();

    const curStep = $('.steps-form__section.current');
    const curStepRow = curStep.find('.steps-form__row');

    curStepRow.addClass(nextOutClass).on('animationend', () => {
      curStepRow.off();
      form.steps('next');
      curStep.next().next().find('.steps-form__row').addClass(nextInClass);
    });
  };
  const prevStep = () => {
    removeRowAnimateClass();

    const curStep = $('.steps-form__section.current');
    const curStepRow = curStep.find('.steps-form__row');

    curStepRow.addClass(prevOutClass).on('animationend', () => {
      curStepRow.off();
      form.steps('previous');
      curStep.prev().prev().find('.steps-form__row').addClass(prevInClass);
    });
  };
  const resetSteps = () => {
    removeRowAnimateClass();

    const sections = $('.steps-form__section');
    let countCurrent = 0;
    let curSection = null;

    for (let i = 0; i < sections.length; i++) {
      if ($(sections[i]).hasClass('current')) {
        countCurrent = i;
        curSection = $(sections[i]);
      }
    }

    const curRow = curSection.find('.steps-form__row');
    const firstRow = $($('.steps-form__row')[0]);

    curRow.addClass(prevOutClass).on('animationend', () => {
      curRow.off();
      for (let i = 0; i<countCurrent; i++) {
        form.steps('previous');
      }
      firstRow.addClass(prevInClass);
    });
  };

  form.validate({
    errorPlacement: function(error, element) {},
    errorClass: "invalid"
  });

  form.steps({
    headerTag: 'h5',
    enableKeyNavigation: false,
    enablePagination: false,
    saveState: true,
    onFinishing: function (event, currentIndex) 
    { 
      let formData = new FormData(event.currentTarget);

      for(let index of formData) {
        $('#'+index[0]).html(index[1]);
      }

      return true; 
    }, 
    onFinished: function (event, currentIndex)
    {
      nextStep();
    }
  });

  $('body').on('click', '.steps a[href="#next"]', (e) => {
    e.preventDefault();
    if (form.valid()) nextStep();
  });

  $('body').on('click', '.steps a[href="#prev"]', (e) => {
    e.preventDefault();
    prevStep();
  });

  $('body').on('click', '.steps a[href="#skip"]', (e) => {
    e.preventDefault();
    nextStep();
  });
  
  $('body').on('click', '.steps a[href="#anew"]', (e) => {
    e.preventDefault();
    $('.steps-form').find('[type="text"], [type="number"]').not('[readonly]').removeAttr('disabled').val('');
    $('.steps-form').find('[type="checkbox"]').prop('checked', false);
    resetSteps();
  });
  
  $('body').on('click', '.steps a[href="#finish"]', (e) => {
    e.preventDefault();
    form.steps('finish');
  });

  $('body').on('change', '.steps-form__check input', (e) => {
    if (e.currentTarget.checked) {
      $(e.currentTarget).parents('.steps-form__row').find('.steps-form__input input').attr('disabled', 'disabled');
    } else {
      $(e.currentTarget).parents('.steps-form__row').find('.steps-form__input input').removeAttr('disabled');
    }
  });
  
});