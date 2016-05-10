/**
 * Created by Gracia on 16/5/9.
 */
var app = angular.module("artBook",[]);

app.controller('bookController',['$scope',function($scope){
    $scope.title = 'Art Books Translated by Bryan Zheng';
    $scope.books = [
        {
            name:'How to look at a painting',
            datepub: new Date('2014','04'),
            price: 48,
            cover: 'img/painting1.jpg',
            like: 0,
            dislike: 0
        },
        {
            name:'How to look at a painting Ⅱ',
            datepub: new Date('2015','01'),
            price: 58,
            cover: 'img/painting2.jpg',
            like: 0,
            dislike: 0
        },
        {
            name:'The Vatican: All the Paintings',
            datepub: new Date('2015','12'),
            price: 399,
            cover: 'img/Vatican.jpg',
            like: 0,
            dislike: 0
        },
        {
            name:'Power of Art',
            datepub: new Date('2015','03'),
            price: 99,
            cover: 'img/art.jpg',
            like: 0,
            dislike: 0
        }
    ];

    $scope.addLike = function(index){
        $scope.books[index].like += 1;
    };
    $scope.addDislike = function(index){
        $scope.books[index].dislike += 1;
    };
}]);