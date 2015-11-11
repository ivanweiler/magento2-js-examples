
define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Inchoo_UiExamples/example2',
        },

        initialize: function () {
            console.log("example2 component initialize");

            this._super();

            this.helloMessage = "Hello world !";
        }
    });
});
