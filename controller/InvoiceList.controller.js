sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/formatter',
], function(Controller, JSONModel, formatter) {

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
        formatter,
        onInit: function() {
            const model = new JSONModel({ currency: 'EUR' });
            this.getView().setModel(model, 'view');
        }
    });
});