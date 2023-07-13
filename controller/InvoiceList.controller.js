sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
        formatter,
        onInit: function() {
            const model = new JSONModel({ currency: 'EUR' });
            this.getView().setModel(model, 'view');
        },
        onFilterInvoices: function(event) {
            let filter = [];
            const query = event.getParameter('query');
            if(query) {
                filter.push(new Filter('ProductName', FilterOperator.Contains, query));
            }

            const list = this.byId('invoiceList');
            const binding = list.getBinding('items');
            console.log(binding);
            binding.filter(filter);
        }
    });
});