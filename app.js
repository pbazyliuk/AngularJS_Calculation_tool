 var calculator = angular.module('calculator', []);

 calculator.controller('CalculatorController', ['$scope', function($scope) {



     $scope.cakes = [{
         name: 'Оберіть торт',
         price: 0
     }, {
         name: 'мокка',
         price: 100
     }, {
         name: 'венеціанська карамель',
         price: 200
     }, {
         name: 'туринський',
         price: 250
     }];


     $scope.selectedCake = $scope.cakes[0];



     $scope.azymes = [{
         name: 'оберіть',
         price: 0
     }, {
         name: 'бісквітні',
         price: 50
     }, {
         name: 'пісочні',
         price: 30
     }, {
         name: 'білкові',
         price: 40
     }];

     $scope.selectedAzyme = $scope.azymes[0];



     $scope.creams = [{
         name: 'оберіть',
         price: 0
     }, {
         name: 'вершковий',
         price: 50
     }, {
         name: 'масляний',
         price: 30
     }, {
         name: 'шоколадний',
         price: 40
     }];

     $scope.selectedCream = $scope.creams[0];


     $scope.covers = [{
         name: 'оберіть',
         price: 0
     }, {
         name: 'мастика',
         price: 50
     }, {
         name: 'шоколад',
         price: 40
     }, {
         name: 'глазурь',
         price: 30
     }];

     $scope.selectedCover = $scope.covers[0];

     $scope.fieldDisabled = false;


     $scope.design = 0;
     $scope.change = function() {
         if ($scope.design == 0) { $scope.design = 100 } else { $scope.design = 0 }
     }

     $scope.term = 1;
     $scope.change2 = function() {
         if ($scope.term == 1) { $scope.term = 1.2 } else { $scope.term = 1 }
     }

     $scope.change3 = function() {
         if ($scope.term == 1) { $scope.term = 1.2 } else { $scope.term = 1 }
     }


     $scope.weight = 1;

     $scope.changeCake = function() {
         $scope.selectedCake.NumberCake;

     }

     $scope.calculate1 = function() {
         $scope.sum = ($scope.selectedCake.price === 0) ? ($scope.selectedAzyme.price +
             $scope.selectedCream.price + $scope.selectedCover.price) : $scope.selectedCake.price;
         $scope.sum2 = (($scope.sum * $scope.weight) + $scope.design) * $scope.term;
     }
 }]);
