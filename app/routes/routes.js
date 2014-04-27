/**
 * Created by YinFeng-Guo on 14-4-27.
 */
var routeModule = angular.module('auth.routes', ['auth.controllers']);

routeModule.config(function($routeProvider){
    $routeProvider.
        when(
            '/',
            {
                templateUrl:'/authentication/app/views/home.html'
            }
        ).
        when(
            '/signup',
            {
                templateUrl:'/authentication/app/views/signup.html'
            }
        ).
        when(
            '/signin',
            {
                templateUrl:'/authentication/app/views/signin.html'
            }
        ).
        otherwise({
            redirectTo: '/'
        });
});