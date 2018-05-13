define(function(require) {
	'use strict';

	var Mn = require('backbone.marionette');
	var tpl = require('text!public/views/templates/primaryview.html');

	var GeneralModel = require('../models/primarymodel');
	var SecondaryView = require('./secondaryview');

	return Mn.View.extend({
		template: _.template(tpl),

		regions: {
			secondaryView: '#secondaryview'
		},

		initialize: function() {
			this.model = new GeneralModel();
		},

		onRender: function() {
			var secondaryView = new SecondaryView({ title: this.model.get('secondaryText') });
			this.showChildView('secondaryView', secondaryView);
		},

		templateContext: function() {
			return {
				title: this.model.get('primaryText')
			};
		}
	});
});
