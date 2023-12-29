
   var internals = {};
   export const externals = {}; // module external api
   import { externals as startController} from "./controllers/startController.js";
   import { externals as evolveController} from "./controllers/evolveController.js";
   
       internals.routes = {
           start: {
               hash: '#start', // hash
               controller: startController // controller
           },
           battle: {
               hash: '#evolve',
               controller: evolveController
           }
       };
   
       internals.defaultRoute = 'start';
       internals.currentHash = ''; // required to track hash changes
   
       internals.hashCheck = function() {
           if (window.location.hash === internals.currentHash) {
               return;
           }
   
           var routeName = Object.keys(internals.routes).find(function(name) {
               return window.location.hash === internals.routes[name].hash;
           });
   
           if (!routeName) {
               routeName = internals.defaultRoute;
               window.location.hash = internals.routes[internals.defaultRoute].hash;
           }
   
           internals.loadController(internals.routes[routeName].controller);
       };
   
       internals.loadController = function(controller) {
           internals.currentHash = window.location.hash;
               try {
                   controller.start();
               } catch (err) {
                   console.log(err.stack);
                   window.location.hash = internals.routes[internals.defaultRoute].hash;
               }
       };
   
       externals.start = function() {
           window.location.hash =
               window.location.hash || internals.routes[internals.defaultRoute].hash;
   
           setInterval(internals.hashCheck, 150);
       };
   