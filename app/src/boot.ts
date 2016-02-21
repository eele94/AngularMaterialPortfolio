/// <reference path="_all.ts" />

module PortfolioManagerApp{
    angular.module('portfolioManagerApp',['ngMaterial'])
    .service('projectService', ProjectService)
    .controller('mainController', MainController);
}