sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("tableContainer.tablecontainer.controller.Master", {
            onInit: function () {
              
               
            },
            onPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("detail" , {
                    productPath: window.encodeURIComponent(oItem.getBindingContext("products").getPath().substr(1))
                });
            
    }})

})