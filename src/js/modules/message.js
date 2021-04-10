import $ from 'jquery';

export default $(function() {
  $('body').on('click', '.btn-message', function(e) {
    e.preventDefault();
    const textarea = $(e.currentTarget).closest('.prompt-form').find('.prompt-form__textarea');
    const btn = $(e.currentTarget);
    const form = textarea.closest('.prompt__form-wrapper');

    form.toggleClass('prompt__form-wrapper--active');
    btn.animate({width: 'toggle', marginLeft: 'toggle', paddingLeft: 'toggle', paddingRight: 'toggle'}, () => {
      textarea.animate({height: 'toggle', paddingTop: 'toggle', paddingBottom: 'toggle', marginBottom: 'toggle'}, () => {
        const animRev = () => {
          textarea.off('blur');
          form.toggleClass('prompt__form-wrapper--active');
          textarea.animate({height: 'toggle', paddingTop: 'toggle', paddingBottom: 'toggle', marginBottom: 'toggle'}, () => {
            btn.animate({width: 'toggle', marginLeft: 'toggle', paddingLeft: 'toggle', paddingRight: 'toggle'});
          });
        };
        textarea.on('blur', animRev);
        textarea.focus();
      });
    });
  });
});