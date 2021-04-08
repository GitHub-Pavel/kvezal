import $ from 'jquery';

export default $(function() {
  $('body').on('click', '.btn-message', function(e) {
    e.preventDefault();
    const textarea = $(e.currentTarget).closest('.prompt-form').find('.prompt-form__textarea');
    const btn = $(e.currentTarget);
    btn.animate({width: 'toggle', marginLeft: 'toggle', paddingLeft: 'toggle', paddingRight: 'toggle'}, () => {
      textarea.animate({height: 'toggle', paddingTop: 'toggle', paddingBottom: 'toggle'}, () => {
        const animRev = () => {
          textarea.off('blur');
          textarea.animate({height: 'toggle', paddingTop: 'toggle', paddingBottom: 'toggle'}, () => {
            btn.animate({width: 'toggle', marginLeft: 'toggle', paddingLeft: 'toggle', paddingRight: 'toggle'});
          });
        };
        textarea.on('blur', animRev);
        textarea.focus();
      });
    });
  });
});