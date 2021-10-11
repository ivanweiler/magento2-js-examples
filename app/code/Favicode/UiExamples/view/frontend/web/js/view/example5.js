
define([
    'uiComponent',
    'Magento_Ui/js/model/messageList',
], function (Component, messageList) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Favicode_UiExamples/example3'
        },

        initialize: function () {
            console.log("example5 component initialize");

            this._super();

            this.helloMessage = "Hello world !";

            messageList.addErrorMessage({ message: "Hello error message !" });
        }
    });
});
