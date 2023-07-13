sap.ui.define([ 
    'sap/ui/core/Control',
    'sap/m/RatingIndicator',
    'sap/m/Label',
    'sap/m/Button',
], function(Control, RatingIndicator, Label, Button) {
    'use strict';

    return Control.extend('sap.ui.demo.walkthrough.control.ProductRating', {
        metadata: {
            properties: {
                value: { type: 'float', defaultValue: 0 }
            },
            aggregations: {
                _rating: { type: 'sap.m.RatingIndicator', multiple: false, visibility: 'hidden' },
                _label: { type: 'sap.m.Label', multiple: false, visibility: 'hidden'},
                _button: { type: 'sap.m.Button', multiple: false, visibility: 'hidden' }
            },
            events: {
                change: {
                    parameters: {
                        value: { type: 'int' }
                    }
                }
            }
        },
        init: function() {
            this.setAggregation('_rating', new RatingIndicator({
                value: this.getValue(),
                iconSize: '2rem',
                visualMode: 'Half',
                liveChange: this._onRate.bind(this)
            }));

            this.setAggregation('_label', new Label({
                text: '{i18n>productRatingLabelInitial}'
            }).addStyleClass('sapUiSmallMargin'));

            this.setAggregation('_button', new Button({
                text: '{i18n>productRatingButton}',
                press: this._onSubmit.bind(this)
            }).addStyleClass('sapUiTinyMarginTopBottom'));
        },
        setValue: function(value) {
            this.setProperty('value', value, true);
            this.getAggregation('_rating').setValue(value);
        },
        reset: function() {
            const resourceBundle = this.getModel('i18n').getResourceBundle();

            this.setValue(0);
            this.getAggregation('_label').setDesign('Standard');
            this.getAggregation('_rating').setEnabled(true);
            this.getAggregation('_label').setText(resourceBundle.getText('productRatingLabelInitial'))
            this.getAggregation('_button').setEnabled(true);
        },
        _onRate: function(event) {
            const resourceBundle = this.getModel('i18n').getResourceBundle();
            const value = event.getParameter('value');

            this.setProperty('value', value, true);
            this.getAggregation('_label').setText(resourceBundle.getText('productRatingLabelIndicator', [value, event.getSource().getMaxValue()]));
        },
        _onSubmit: function(event) {
            const resourceBundle = this.getModel('i18n').getResourceBundle();

            this.getAggregation('_rating').setEnabled(false);
            this.getAggregation('_label').setText(resourceBundle.getText('productRatingLabelFinal'));
            this.getAggregation('_button').setEnabled(false);
            this.fireEvent('change', { value: this.getValue() });
        },
        renderer: function (rm, control) {
            rm.openStart('div', control);
            rm.openEnd();
            rm.renderControl(control.getAggregation('_rating'));
            rm.renderControl(control.getAggregation('_label'));
            rm.renderControl(control.getAggregation('_button'));
            rm.close('div');
        }
    });
});