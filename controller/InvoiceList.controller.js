sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
], function(Controller, JSONModel) {

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
        onInit: function() {
            const model = new JSONModel({ currency: 'EUR' });
            this.getView().setModel(model, 'view');
        }
    });
});