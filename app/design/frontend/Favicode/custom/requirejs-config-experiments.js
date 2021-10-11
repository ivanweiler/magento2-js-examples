
var config = {
    map: {
        "*": {
            //force new jquery version?
            "jquery": "js/jquery-2.2.0"
        }
    },

    /**
     * merge specific javascripts together in bundles
     *
     * merged js needs to be in format: define(NAME, [deps], function(){})
     */

    bundles: {
        'uicomponent_bundle': [
            "Magento_Ui/js/core/app",
            "Magento_Ui/js/core/renderer/layout"
            //..
        ],
        'checkout_bundle': [

        ]
    }
};


/**
 * Remove Magento default deps-es
 */
var emptyModule = function(){ return {}; };
var removeList = [
    "jquery/jquery-migrate",
    "jquery/jquery.mobile.custom",
    "js/responsive",
    //"mage/common",
    "mage/dataPost",
    "js/theme",
    //"mage/bootstrap",
    "mage/translate-inline"
];

for (var i = 0; i < removeList.length; i += 1) {
    //requirejs.undef(removeList[i]);
    define(removeList[i], [], emptyModule);
}





