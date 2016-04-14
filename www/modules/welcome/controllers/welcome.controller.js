angular.module('app')
.controller('WelcomeController', function($scope, $state){
   var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  }) 
  
  $scope.goToLogin = function(){
      $state.go('app.login');
  }
         
})