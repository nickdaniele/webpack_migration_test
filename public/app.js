define(function(require) {
	'use strict';

	var Mn = require('backbone.marionette');
	var InitialView = require('./views/primaryview');

	var App = Mn.Application.extend({
		region: '#app',

		onStart: function() {
			this.showView(new InitialView());
		}
	});

	var myApp = new App();

	myApp.start();
});
