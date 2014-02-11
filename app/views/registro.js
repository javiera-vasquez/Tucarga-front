export default Ember.View.extend({
  didInsertElement: function(){
    this._super();
    $('.radiobuttons.type li').on('click',  function() {
        $('.radiobuttons.type li').removeClass('active');
        $(this).addClass('active');
    });
    $('.radiobuttons.truck .awnser-yes').on('click',  function() {
      $('.awnser.truck').show();
    });
    $('.radiobuttons.storage .awnser-yes').on('click',  function() {
      $('.awnser.storage').show();
    });
    $('.radiobuttons.truck .awnser-no').on('click',  function() {
      $('.awnser.truck').hide();
    });
    $('.radiobuttons.storage .awnser-no').on('click',  function() {
      $('.awnser.storage').hide();
    });
  }
});
