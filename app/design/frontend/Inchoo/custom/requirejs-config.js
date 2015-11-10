/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        "*": {
            //"jquery/jquery-migrate":  function() { return function(){}; }
        }
    },
    paths: {
        "jquery/ui": "jquery/jquery-ui"
    },

    deps: []
};



var emptyModule = function(){ return {}; };
var ignoreList = [
    "jquery/jquery-migrate",

    "jquery/jquery.mobile.custom",
    "js/responsive",
    //"mage/common",
    "mage/dataPost",
    "js/theme",
    //"mage/bootstrap",

    "mage/translate-inline"
];

for (var i = 0; i < ignoreList.length; i += 1) {
    //requirejs.undef(ignoreList[i]);
    define(ignoreList[i], [], emptyModule);
}





