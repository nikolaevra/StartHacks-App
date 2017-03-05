(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.user = null;

        vm.user.firstName = "Golden Hawks";
        vm.user.facebook = "SpottedWLU";
        vm.user.snapchat = "lauriersnaps";
        vm.user.twitter = "SpottedLaurier";
        vm.user.instagram = "https://gradeslam.org/blog_images/241/homecoming.jpg";
    }

})();