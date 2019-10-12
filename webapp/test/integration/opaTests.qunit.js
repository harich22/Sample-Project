/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"hari/app/Zsify_emp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});