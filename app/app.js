"use strict";

angular.module("test", [
        
        "ui.router",
        "ngResource",
    ])
    .config(
        function ($stateProvider, $urlRouterProvider) {
            var states = [
                {   name: "form",
                    url: "/form",
                    component: "form"
                }

            ];
            $urlRouterProvider.otherwise("/");
            states.forEach(function (state) {
                $stateProvider.state(state);
            })
        });