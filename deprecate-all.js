////////////////////////// Views

// // Load foundation  and base scripts
// Ember.View.reopen({
//   didInsertElement : function(){
//     this._super();
//     $(document).foundation();
//     $('.has-dropdown a.false').click(function() {
//         return false;
//     });
//   }
// });

// App.IndexView = Ember.View.extend({
//   didInsertElement : function(){
//     this._super();
//     $('#header').show();
//     $(document).foundation();
//     $('.has-dropdown a.false').click(function() {
//         return false;
//     })
// });

// App.ApplicationView = Ember.View.extend({
//   didInsertElement : function(){
//     this._super();
//         var loopAd = $('#ad-loop').clone();
//         $('.loop-list:first-child').after(loopAd);
//   }
// });

// App.RegistroView = Ember.View.extend({
//   didInsertElement: function(){
//     this._super();
//     $('.radiobuttons.type li').on('click',  function() {
//         $('.radiobuttons.type li').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.radiobuttons.truck .awnser-yes').on('click',  function() {
//       $('.awnser.truck').show();
//     });
//     $('.radiobuttons.storage .awnser-yes').on('click',  function() {
//       $('.awnser.storage').show();
//     });
//     $('.radiobuttons.truck .awnser-no').on('click',  function() {
//       $('.awnser.truck').hide();
//     });
//     $('.radiobuttons.storage .awnser-no').on('click',  function() {
//       $('.awnser.storage').hide();
//     });
//   }
// });

////////////////////////// Routes

// //  Get a directorio
// App.DirectorioRoute = Ember.Route.extend({
//   model: function () {
//     return this.store.find('transportistas');
//   }
// });

// // Cotizar
// App.CotizarRoute = Ember.Route.extend({
//     model: function() {
//         return this.store.createRecord('freightfirststep');
//     }
// });

// // Registro
// App.RegistroRoute = Ember.Route.extend({
//     model: function() {
//         return this.store.createRecord('registro');
//     }
// });

// App.NosotrosRoute = Ember.Route.extend({
//    redirect: function(){
//       this.transitionTo('ayuda');
//    }
// });

////////////////////////// Controllers

// App.CotizarController =Ember.ObjectController.extend({
//     actions: {
//         // crear objeto cotizacion
//         saveCotizacion: function() {
//             var cotizar = this.store.createRecord('freightfirststep', {
//                 name: this.get('name'),
//                 fecha: this.get('fecha'),
//                 lugar: this.get('lugar')
//             });
//             // post de la cotizacion
//             var controller = this;
//             cotizar.save().then(function(cotizar){});
//             // #link-to
//             //this.transitionToRoute('exito');
//         }
//     }
// });

// App.RegistroController = Ember.ArrayController.extend({
//     actions: {
//     // crear objeto cotizacion
//     saveRegistro: function() {
//         var registro = this.store.createRecord('registro', {
//             company: this.get('company')
//         });
//         // post de la registro de usuario
//         var controller = this;
//         registro.save().then(function(registro){});
//         // #link-to
//         //this.transitionToRoute('gracias');
//       }
//     }
// });

// Contar modelo
//  usersCount: function(){
//    return this.get('model.length');
//  }.property('@each')
// });

////////////////////////// Models

// string, number, boolean, and date

//// Registro de transportistas
// App.Registro = DS.Model.extend({
//     // Datos empresa
//     type : DS.attr('string'),
//     company : DS.attr('string'),
//     razonName : DS.attr('string'),
//     rut : DS.attr('number'),
//     creationDate : DS.attr('date'),
//     address : DS.attr('string'),
//     addressNumber : DS.attr('number'),
//     addressOffice : DS.attr('string'),
//     commune : DS.attr('string'),
//     city : DS.attr('string'),
//     region : DS.attr('string'),
//     // Datos segun tipo
//     truckNumber : DS.attr('number'),
//     storageType : DS.attr('string'),
//     storageCapacity : DS.attr('number'),
//     // Usuario
//     firstName : DS.attr('string'),
//     lastName : DS.attr('string'),
//     jobTittle : DS.attr('string'),
//     mail : DS.attr('string'),
//     phone : DS.attr('number'),
//     celPhone : DS.attr('number')
//     // Traigo el usuario
//     //user : DS.belongsTo('user')
// });

// // Cotización
// App.Freightfirststep = DS.Model.extend({
//     name: DS.attr('string'),
//     fecha: DS.attr('string'),
//     lugar: DS.attr('string')
// });

// App.Cotizacion = DS.Model.extend({
//     user : DS.belongsTo('user')
// });

// App.User = DS.Model.extend({
//     firstName : DS.attr('string'),
//     lastName : DS.attr('string'),
//     jobTittle : DS.attr('string'),
//     mail : DS.attr('string'),
//     phone : DS.attr('number'),
//     celPhone : DS.attr('number'),
//     // Linkeo a modelo registro y cotizacion
//     registro : DS.belongsTo('registro'),
//     cotizacion : DS.belongsTo('cotizacion')
// });

// // Listado de transportista
// App.Transportistas = DS.Model.extend({
//     name: DS.attr(),
//     zone: DS.attr(),
//     city: DS.attr(),
//     suply: DS.attr()
// });

// // Filtros de transportista
// App.Filters = DS.Model.extend({
//     from : DS.attr(),
//     to : DS.attr(),
//     type : DS.attr()
// });

////////////////////////// FIXTURES

// App.Filters.FIXTURES = [{
//     id: 1,
//     from: [
//         "asdf",
//         "Tom"
//     ],
//     to: [
//         "Yehuda",
//         "Tom"
//     ],
//     type: [
//         "Yehuda",
//         "Tom"
//     ]
// }];

// App.Transportistas.FIXTURES = [{
//     id: 1,
//     name: 'Super duper emprresa',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 2,
//     name: 'Nombre emprresa',
//     zone: 'Norte - centro - sur',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 3,
//     name: 'Aasdfasdf asdf',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 4,
//     name: 'qwertqwe',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 5,
//     name: 'Super duper emprresa',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 6,
//     name: 'duper emprresa',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 7,
//     name: 'Super duper emprresa',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 8,
//     name: 'emprresa',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }, {
//     id: 9,
//     name: 'Super',
//     zone: 'Centro',
//     city: 'Santiago',
//     suply: 'Si'
// }];
