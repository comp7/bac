/*$(function () {

    var object = {};

    _.extend(object, Backbone.Events);

    object.on("alert", function(msg) {
        alert("Triggered" + msg);
    });
    object.on("alert", function(msg) {
        console.log ("Triggered" + msg);
    });

    object.trigger("alert", " an event");

    $('#btn').on('click', function() {
        object.trigger("alert", " clicked");
    });
     
});
//модель
var app = app || {};
$(function () {
app.MyObject = Backbone.Model.extend({
defaults:{
    name:"name",
    description: "_",
    size: 100
},
initialize: function() {
    console.log('obj created');
    this.on('change', function(){
        console.log('obj changed');
        var json = app.myObject.changedAttributes();
console.log(json);
    });
},
validate:function(attrs){
    if (attrs.size>1000){
    console.log('Incorrect size');
    return 'Incorrect size';
    }
},
increaseSize: function(){
    app.myObject.set({
         size: this.get('size')+100
     },{
        validate:true
    });
}
});
app.myObject = new app.MyObject({
name:"rooket",
description:"super"
});
app.myObject.set({
    size: 250,
    type: 'active'
});
$('#btns').on('click', function() {
        app.myObject.increaseSize();
    });
});*/