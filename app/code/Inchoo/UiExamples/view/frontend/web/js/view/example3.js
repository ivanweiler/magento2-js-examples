
define([
    'uiComponent',
    'Magento_Ui/js/model/messageList',
], function (Component, messageList) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Inchoo_UiExamples/example2',
        },

        initialize: function () {
            console.log("example3 component initialize");

            this._super();

            this.helloMessage = "Hello world !";

            messageList.addErrorMessage({ message: "Hello error message !" });
        }
    });
});
