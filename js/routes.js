angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('instagram', {
    url: '/page10',
    templateUrl: 'templates/instagram.html',
    controller: 'instagramCtrl'
  })

  .state('search', {
    url: '/page11',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  .state('photo', {
    url: '/page12',
    templateUrl: 'templates/photo.html',
    controller: 'photoCtrl'
  })

  .state('notification', {
    url: '/page13',
    templateUrl: 'templates/notification.html',
    controller: 'notificationCtrl'
  })

  .state('following', {
    url: '/page19',
    templateUrl: 'templates/following.html',
    controller: 'followingCtrl'
  })

  .state('you', {
    url: '/page18',
    templateUrl: 'templates/you.html',
    controller: 'youCtrl'
  })

  .state('personSetting', {
    url: '/page14',
    templateUrl: 'templates/personSetting.html',
    controller: 'personSettingCtrl'
  })

  .state('list', {
    url: '/page20',
    templateUrl: 'templates/list.html',
    controller: 'listCtrl'
  })

  .state('photosOfYou', {
    url: '/page21',
    templateUrl: 'templates/photosOfYou.html',
    controller: 'photosOfYouCtrl'
  })

  .state('video', {
    url: '/page15',
    templateUrl: 'templates/video.html',
    controller: 'videoCtrl'
  })

  .state('direct', {
    url: '/page16',
    templateUrl: 'templates/direct.html',
    controller: 'directCtrl'
  })

  .state('page', {
    url: '/page17',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page10')

  

});