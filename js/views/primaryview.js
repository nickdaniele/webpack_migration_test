/* eslint-disable */

define(function(require) {
	'use strict';

	var Mn = require('backbone.marionette');
	var tpl = require('text!js/views/templates/primaryview.html');

	return Mn.View.extend({
		template: tpl
	});
});
