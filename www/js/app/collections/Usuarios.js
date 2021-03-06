define([
    'backbone',
    'models/Usuario',
    'localstorage'
], function(Backbone,usuarioModel,Store){
    var usuariosCollection = Backbone.Collection.extend({
        initialize: function(){
            console.log("Init usuariosCollection: fetch");
            this.fetch();
        },
        model: usuarioModel,

        localStorage: new Store('iaca-shift-usuarios')

    });

    //SINGLETON
    return new usuariosCollection();
});