
define([
    'uiComponent',
    //'Magento_Customer/js/customer-data'
], function (Component) {
    'use strict';

    return Component.extend({
        initialize: function () {

            this._super();

            console.log("hello component initialize");

            this.helloMessage = "Hello world !";
            this.helloArray = this.helloMessage.split(' ');

            /*
            var isShowAddToCart = false;

            this._super();
            this.lastOrderedItems = customerData.get('last-ordered-items');

            for (var item in this.lastOrderedItems.items) {
                if (item['is_saleable']) {
                    isShowAddToCart = true;
                    break;
                }
            }

            this.lastOrderedItems.isShowAddToCart = isShowAddToCart;
            */
        }
    });
});
