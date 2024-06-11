/**
 * contact router
 */

import { factories } from "@strapi/strapi";

const defaultRouter = factories.createCoreRouter("api::contact.contact");

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "GET",
    path: "/custom-contact",
    handler: "custom-contact.getCustomContact",
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default customRouter(defaultRouter, myExtraRoutes);
