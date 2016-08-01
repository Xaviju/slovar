// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.essentials', {
    url: '/essentials',
    views: {
      'menuContent': {
        templateUrl: 'templates/essentials.html'
      }
    }
  })

  .state('app.patterns', {
    url: '/patterns',
    views: {
      'menuContent': {
        templateUrl: 'templates/patterns.html'
      }
    }
  })

  .state('app.smalltalk', {
      url: '/smalltalk',
      views: {
        'menuContent': {
          templateUrl: 'templates/smalltalk.html'
        }
      }
    })
    .state('app.directions', {
      url: '/directions',
      views: {
        'menuContent': {
          templateUrl: 'templates/directions.html'
        }
      }
    })
    .state('app.resturant', {
      url: '/restaurant',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurant.html'
        }
      }
    })
    .state('app.numbers', {
      url: '/numbers',
      views: {
        'menuContent': {
          templateUrl: 'templates/numbers.html'
        }
      }
    })
    .state('app.emergencies', {
      url: '/emergencies',
      views: {
        'menuContent': {
          templateUrl: 'templates/emergencies.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/essentials');
});
