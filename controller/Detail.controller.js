sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'sap/m/MessageToast'
], function(Controller, History, MessageToast) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.Detail', {
        onInit: function() {
            const router = this.getOwnerComponent().getRouter();
            router.getRoute('detail').attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function(event) {
            this.byId('rating').reset();
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
        },
        onRatingChange: function(event) {
            const value = event.getParameter('value');
            const resourceBundle = this.getView().getModel('i18n').getResourceBundle();

            MessageToast.show(resourceBundle.getText('ratingConfirmation', [value]));
        }
    });
});