requirejs.config({
	paths: {
		text: 'node_modules/requirejs-text/text',
		jquery: 'node_modules/jquery/dist/jquery',
		underscore: 'node_modules/underscore/underscore',
		backbone: 'node_modules/backbone/backbone',
		'backbone.radio': 'node_modules/backbone.radio/build/backbone.radio',
		'backbone.marionette': 'node_modules/backbone.marionette/lib/backbone.marionette'
	}
});

requirejs(['public/app']);
