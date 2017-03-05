(function () {
    'use strict';

    angular
        .module('app')
        .controller('search.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;

        initController();

        function saveUser() {
            UserService.GetByUsername(vm.user)
                .then(function (user) {
                    //console.log();
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();