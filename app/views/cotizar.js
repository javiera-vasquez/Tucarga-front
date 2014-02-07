export default Ember.View.extend({
    didInsertElement: function(){
        this._super();
        $(document).foundation();
    }
});
