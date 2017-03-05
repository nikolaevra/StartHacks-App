(function () {
    'use strict';

    angular
        .module('app')
        .controller('search.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.searchUser = searchUser;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function searchUser() {
            service.GetByUsername(vm.user)
                .then(function (user) {
                    //console.log(user);
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();