sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
        onInit: function() {
            const oModel = new JSONModel({ recipient: { name: 'World' }});
            this.getView().setModel(oModel);

            const i18nModel = new ResourceModel({
                bundleName: 'sap.ui.demo.walkthrough.i18n.i18n'
            });

            this.getView().setModel(i18nModel, 'i18n');
        },
        onShowHello: function() {
            const recipient = this.getView().getModel().getProperty('/recipient/name');
            const i18nModel = this.getView().getModel('i18n').getResourceBundle();
            const message = i18nModel.getText('helloMsg', [recipient]);

            MessageToast.show(message);
        }
    });
});