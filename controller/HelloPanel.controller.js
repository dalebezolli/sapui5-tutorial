sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function(Controller, MessageToast, Fragment) {

    return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
        onShowHello: function() {
            const recipient = this.getView().getModel().getProperty('/recipient/name');
            const i18Model = this.getView().getModel('i18n').getResourceBundle();
            const message = i18Model.getText('helloMsg', recipient);
        
            MessageToast.show(message);
        },
        onShowDialogHello: function() {
            const recipient = this.getView().getModel().getProperty('/recipient/name');
        
            if(!this.pDialog) {
                this.pDialog = this.loadFragment({ name: 'sap.ui.demo.walkthrough.view.HelloDialog'});
            }

            this.pDialog.then(function(oDialog) { oDialog.open() });
        },
        onHideDialogHello: function() {
            this.byId('helloDialog').close();
        }
    });
});