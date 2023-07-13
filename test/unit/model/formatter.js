sap.ui.define([
    'sap/ui/demo/walkthrough/model/formatter',
    'sap/ui/model/resource/ResourceModel',
], function(formatter, ResourceModel) {
    'use strict';

    QUnit.module('Formatting functions', {
        beforeEach: function() {
            this._resourceModel = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl('sap/ui/demo/walkthrough') + '/i18n/i18n.properties'
            });
        },
        afterEach: function() {
            this._resourceModel.destroy();
        }
    });

    QUnit.test('Should return the translated texts', function(assert) {
        const model = this.stub();
        model.withArgs('i18n').returns(this._resourceModel);

        const viewStub = { getModel: model };
        const controllerStub = { getView: this.stub().returns(viewStub) };
        const isolatedFormatter = formatter.statusText.bind(controllerStub);

        assert.strictEqual(isolatedFormatter('A'), 'New', 'The long text for status A is correct');
        assert.strictEqual(isolatedFormatter('B'), 'In Progress', 'The long text for status B is correct');
        assert.strictEqual(isolatedFormatter('C'), 'Done', 'The long text for status C is correct');
        assert.strictEqual(isolatedFormatter('Foo'), 'Foo', 'The long text for status Foo is correct');
    });
});