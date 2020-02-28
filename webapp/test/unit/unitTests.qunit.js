/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZTEST_CONTROLTABLE/ZTEST_CONTROLTABLE/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});