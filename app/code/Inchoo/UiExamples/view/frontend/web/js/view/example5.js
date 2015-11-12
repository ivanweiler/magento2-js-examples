
define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function (ko, Component, customerData) {
    'use strict';

    return Component.extend({

        initialize: function(data) {
            console.log("example5 component initialize");
            this._super();

            this.helloMessage = ko.observable("Hello world !");

            /**
             * Local Storage (mage-cache-storage)
             */
            this.customer = customerData.get('customer')();
            this.checkout = customerData.get('cart')();

            this.custom = customerData.get('custom')();

            console.log(this.customer);
            console.log(this.checkout);
            console.log(this.custom);
        },

        clickMe: function() {

            this.helloMessage(this.customer.fullname);

        }

    });
});
