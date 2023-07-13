sap.ui.define([], function() {
    return {
        statusText: function(status) {
            const resourceBundle = this.getView().getModel('i18n').getResourceBundle();

            switch(status) {
                case 'A': return resourceBundle.getText('invoiceStatusA');
                case 'B': return resourceBundle.getText('invoiceStatusB');
                case 'C': return resourceBundle.getText('invoiceStatusC');
                default: return status;
            }
        }
    }
});