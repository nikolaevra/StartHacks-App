(function () {
    'use strict';

    angular
        .module('app')
        .controller('search.IndexController', Controller);

    function Controller($window, UserService, FlashService, $scope) {
        var vm = this;

        vm.user = null;
        vm.searchUser = searchUser;
        $scope.name = "";

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function searchUser() {
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
    }

}
})();