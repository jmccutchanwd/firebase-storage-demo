/* John McCutchan ============================================ */
console.log('Begin');
const app = angular.module('MyApp',['ngRoute'])
//
app.config(($routeProvider, $locationProvider) => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhi1bEoFWrEeiCP_SvU89dcR3A3hltUPw",
    authDomain: "practice-7fab7.firebaseapp.com",
    databaseURL: "https://practice-7fab7.firebaseio.com",
    storageBucket: "practice-7fab7.appspot.com",
    messagingSenderId: "840921031785"
  };
  firebase.initializeApp(config);
  //
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'partials/home.html',
    })
})
//
//'firebase'
//firebase JSON: https://practice-7fab7.firebaseio.com/
//firebase storage: gs://practice-7fab7.appspot.com
