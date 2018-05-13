define(function(require) {
	'use strict';

	var Bb = require('backbone');

	return Bb.Model.extend({
		defaults: {
			primaryText: 'Primary View',
			secondaryText: 'Secondary View'
		}
	});
});
