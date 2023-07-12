sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
], function(Controller, MessageToast) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
        onShowHello: function() {
            const recipient = this.getView().getModel().getProperty('/recipient/name');
            const i18nModel = this.getView().getModel('i18n').getResourceBundle();
            const message = i18nModel.getText('helloMsg', [recipient]);

            MessageToast.show(message);
        }
    });
});