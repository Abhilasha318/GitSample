/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"GSA/GitSampleApp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});