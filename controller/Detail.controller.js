sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
], function(Controller, History) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.Detail', {
        onInit: function() {
            const router = this.getOwnerComponent().getRouter();
            router.getRoute('detail').attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function(event) {
            this.getView().bindElement({
                path: '/' + window.decodeURIComponent(event.getParameter('arguments').invoicePath),
                model: 'invoice'
            });
        },
        onNavBack: function() {
            const history = History.getInstance();
            const previousHash = history.getPreviousHash();

            if(previousHash !== undefined) {
                window.history.go(-1);
            } else {
                const router = this.getOwnerComponent().getRouter();
                router.navTo('overview', {}, true);
            }
        }
    });
});