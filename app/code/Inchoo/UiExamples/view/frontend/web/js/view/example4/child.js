define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Inchoo_UiExamples/example4/child'
        },

        initialize: function () {
            this._super();

            console.log("example4-child component initialize");
        }
    });
});