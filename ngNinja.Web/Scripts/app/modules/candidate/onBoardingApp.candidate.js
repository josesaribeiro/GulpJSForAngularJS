// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {
    'use strict';
    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.candidate', [
            'onBoardingApp.candidate.services',
            'onBoardingApp.candidate.controllers'
        ])
        .config(config);

    function config() {
        
    }

})();
