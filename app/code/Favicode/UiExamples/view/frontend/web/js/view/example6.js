
define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function (ko, Component, customerData) {
    'use strict';

    return Component.extend({

        initialize: function(data, d2) {
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

            if("fullname" in this.customer) {
                this.helloMessage(this.customer.fullname);
            } else {
                this.helloMessage("Customer name not available, most likely not logged in.");
            }
        }

    });
});
