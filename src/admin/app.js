// src/admin/src/index.js
import ExportButton from "./extensions/components/ExportButton";
export default {
  register(app) {},

  bootstrap(app) {
    // Additional bootstrap logic if needed
    app.injectContentManagerComponent("listView", "actions", {
      name: "ExportButton",
      Component: ExportButton,
    });
  },
};
