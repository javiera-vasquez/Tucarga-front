// Registro de transportistas

var Registro = DS.Model.extend({
    // Datos empresa
    type : DS.attr('string'),
    company : DS.attr('string'),
    razonName : DS.attr('string'),
    rut : DS.attr('number'),
    creationDate : DS.attr('date'),
    address : DS.attr('string'),
    addressNumber : DS.attr('number'),
    addressOffice : DS.attr('string'),
    commune : DS.attr('string'),
    city : DS.attr('string'),
    region : DS.attr('string'),
    // Datos segun tipo
    truckNumber : DS.attr('number'),
    storageType : DS.attr('string'),
    storageCapacity : DS.attr('number'),
    // Usuario
    firstName : DS.attr('string'),
    lastName : DS.attr('string'),
    jobTittle : DS.attr('string'),
    mail : DS.attr('string'),
    phone : DS.attr('number'),
    celPhone : DS.attr('number')
    // Traigo el usuario
    //user : DS.belongsTo('user')
});

export default Registro;
