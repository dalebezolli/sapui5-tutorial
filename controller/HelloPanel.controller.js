sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
], function(Controller, MessageToast) {

    return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
        onShowHello: function() {
            const recipient = this.getView().getModel().getProperty('/recipient/name');
            const i18Model = this.getView().getModel('i18n').getResourceBundle();
            const message = i18Model.getText('helloMsg', recipient);
        
            MessageToast.show(message);
        }
    });
});