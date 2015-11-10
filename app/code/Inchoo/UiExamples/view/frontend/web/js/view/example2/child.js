define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Inchoo_UiExamples/example2/child',
        },

        initialize: function () {
            this._super();

            console.log("example2-child component initialize");
        }
    });
});