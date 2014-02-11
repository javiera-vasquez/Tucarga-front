// Listado de transportista
 var Directorio = DS.Model.extend({
    name: DS.attr(),
    zone: DS.attr(),
    city: DS.attr(),
    suply: DS.attr()
});

 Directorio.FIXTURES = [{
    id: 1,
    name: 'Super duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 2,
    name: 'Nombre emprresa',
    zone: 'Norte - centro - sur',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 3,
    name: 'Aasdfasdf asdf',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 4,
    name: 'qwertqwe',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 5,
    name: 'Super duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 6,
    name: 'duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 7,
    name: 'Super duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 8,
    name: 'emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 9,
    name: 'Super',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}];

export default Directorio;
