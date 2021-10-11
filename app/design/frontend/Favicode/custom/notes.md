# Magento 2 Javascript examples
https://github.com/ivanweiler/magento2-js-examples

## RequireJs

JavaScript file and module loader.
http://requirejs.org/

1. Async loading
2. Dependency resolver

requirejs-config.js

## Js initialization

http://devdocs.magento.com/guides/v2.0/javascript-dev-guide/javascript/js_init.html
```
// init on specific element
<tag data-mage-init='{ "<component_name>": {...} }'></tag>

<script type="text/x-magento-init">
    // init on the element defined by selector
    "<element_selector>": {
        "<js_component1>": ...,
        "<js_component2>": ...
    },
    // init without binding to an element
    "*": {
        "<js_component3">: ...
    }
</script>
```

Where are js files located? How to find specific one?

## JQuery Widgets

Similar to old Class.create(), also possible to extend
http://api.jqueryui.com/jQuery.widget/

## UiComponents

Knockout Javascript Ui framework, http://knockoutjs.com/
Why we need to know this ?
