var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

// Router.map(function() {
//   this.route('component-test');
//   this.route('helper-test');
//   // this.resource('posts', function() {
//   //   this.route('new');
//   // });
// });

Router.map(function () {
    // Inicio
    this.route('index', { path: '/' });
    //Directorio transportistas
    this.resource('directorio');
    // Registro de usuario
    this.resource('registro', function(){
        this.route('gracias');
    });
    // Cotizar
    this.resource('cotizar', function(){
        this.route('impo');
        this.route('expo');
        this.route('domestico');
        this.route('contenedor');
        this.route('exito');
    });
    // Como funciona
    this.resource('como_funciona', function(){
        this.resource('cargador');
        this.resource('transportista');
    });
    // Nosotros
    this.resource('nosotros', function(){
        this.resource('contacto');
        this.resource('ayuda');
    });
});

export default Router;
