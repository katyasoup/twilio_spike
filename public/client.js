console.log('script sourced');


var myApp = angular.module('myApp', []);

myApp.controller('PageController', function ($http) {
    console.log('NG');
    var vm = this;

    vm.sendMessage = function() {
        console.log('you clicked me!', vm.message);
        $http({
            method: 'POST',
            url: '/send',
        });
    };
});