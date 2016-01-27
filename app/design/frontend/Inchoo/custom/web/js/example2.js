/**
 * AMD module, bootstrap for all/most Magento2 javascripts
 */
define([
    'jquery',
    'js/example1'
], function ($) {
    'use strict';

    console.log("example 2 loaded and executed");

    //log jQuery version
    console.log($.fn.jquery);

    return "Inchoo";

    //return function() {
    //    console.log("example 2 return executed");
    //};
});