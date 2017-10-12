console.log('script sourced');


var myApp = angular.module('myApp', []);

myApp.controller('PageController', function ($http) {
    console.log('NG');
    var vm = this;

    vm.sendMessage = function() {
        var messageToSend = {
            message: vm.message
        };
        console.log('you clicked me!', messageToSend);
        $http({
            method: 'POST',
            url: '/send',
            data: messageToSend
        });
    };
});