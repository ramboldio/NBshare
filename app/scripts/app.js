// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.routes', 'app.controllers']);

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'pageCtrl'
  })

  .state('contacts', {
    url: '/texting',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('peter', {
    url: '/peter',
    templateUrl: 'templates/peter.html',
    controller: 'peterCtrl'
  })

$urlRouterProvider.otherwise('/welcome')



});

angular.module('app.controllers', [])

.controller('searchCtrl', function($scope) {
  console.log('test');
})

.controller('pageCtrl', function($scope) {

})

.controller('contactsCtrl', function($scope) {

})

.controller('peterCtrl', function($scope) {

})

