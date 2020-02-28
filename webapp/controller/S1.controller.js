sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ZTEST_CONTROLTABLE.ZTEST_CONTROLTABLE.controller.S1", {
		onInit: function () {
			var oTable = this.getView().byId("idProductsTable");
			var oModel = new JSONModel("model/Employees.json");
			oTable.setModel(oModel);
			oTable.bindItems("/Employees", sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Empid}"

					}),
					new sap.m.Text({
						text: "{EmpName}"

					}),
					new sap.m.Text({
						text: "{Age}"

					}),
					new sap.m.Text({
						text: "{Mobile}"

					})

				]

			}));

		}

	});

});