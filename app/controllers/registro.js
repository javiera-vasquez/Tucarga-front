export default Ember.ArrayController.extend({
    actions: {
    // crear objeto cotizacion
    saveRegistro: function() {
        var registro = this.store.createRecord('registro', {
            company: this.get('company')
        });
        // post de la registro de usuario
        var controller = this;
        registro.save().then(function(registro){});
        // #link-to
        //this.transitionToRoute('gracias');
      }
    }
});
