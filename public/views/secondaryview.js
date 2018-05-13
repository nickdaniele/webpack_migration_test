define(function(require) {
	'use strict';

	var Mn = require('backbone.marionette');
	var tpl = require('text!public/views/templates/secondaryview.html');

	return Mn.View.extend({
		template: _.template(tpl),

		templateContext: function() {
			return {
				title: this.getOption('title')
			};
		}
	});
});
