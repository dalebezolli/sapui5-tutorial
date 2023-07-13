sap.ui.define([
    'sap/ui/core/util/MockServer',
    'sap/base/util/UriParameters'
], function(MockServer, UriParameters) {
    'use strict';

    return {
        init: function() {
            const mockServer = new MockServer({ rootUri: 'https://services.odata.org/V2/Northwind/Northwind.svc/'});
            const uriParameters = new UriParameters(window.location.href);

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: uriParameters.get('serverDelay') || 500
            });

            const path = sap.ui.require.toUrl('sap/ui/demo/walkthrough/localservices');
            mockServer.simulate(path + '/metadata.xml', path + '/mockdata');

            mockServer.start();
        }
    };
});