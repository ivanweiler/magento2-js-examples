
define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Inchoo_UiExamples/example2',
        },

        initialize: function () {
            this._super();

            console.log("example2 component initialize");

            this.helloMessage = "Hello world !";
        }
    });
});
