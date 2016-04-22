var app = angular.module('myApp', []);

app.controller('SuperController', function($http){
  var controller = this;

  controller.thing = '';
  controller.stuff = {};
  controller.show = false;
  controller.secondShow = false;
  controller.stuff = [];
  controller.things = [];

  controller.getResult = function(){
    controller.thing = controller.thing;
    controller.show = true;
    console.log(controller.thing);
    controller.stuff.unshift(controller.thing);
    controller.thing = '';
    if(controller.things.length > 0){
      controller.thing = '';
      console.log(controller.stuff);
      controller.secondShow = true;
      controller.things.push(controller.stuff.pop());
      // console.log(controller.things);
      // console.log(controller.stuff);
    } else {
      controller.things.push(controller.thing);
      console.log(controller.things);
    }
  };
});
