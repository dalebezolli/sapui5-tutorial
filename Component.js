sap.ui.define([ 
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
], function(UIComponent, JSONModel, ResourceModel) {
    'use strict';

    return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
        metadata: {
            'interfaces': 'sap.ui.core.IAsyncContentCreation',
            'manifest': 'json'
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            const oModel = new JSONModel({ recipient: { name: 'World' }});
            this.setModel(oModel);

            const i18nModel = new ResourceModel({
                bundleName: 'sap.ui.demo.walkthrough.i18n.i18n'
            });

            this.setModel(i18nModel, 'i18n');
        }
    });
});