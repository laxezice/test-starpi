import React from "react";
import { Button } from "@strapi/design-system/Button";
import { useFetchClient } from "@strapi/helper-plugin";

const ExportButton = () => {
  const fetchClient = useFetchClient();
  const handleExport = async () => {
    try {
      const contentType = window.location.pathname.split("/").pop();
      const response = await fetchClient.get(
        `/content-manager/collection-types/${contentType}`,
        {
          timeout: 30000,
          params: {
            pageSize: 9999,
          },
        }
      );
      console.log(response, "response");
    } catch (error) {
      console.error("Error exporting content:", error);
    }
  };

  return (
    <Button variant="secondary" onClick={handleExport}>
      Export
    </Button>
  );
};

export default ExportButton;
