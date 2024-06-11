export default {
  getCustomContact: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::contact.contact"
      );

      // return the reduced data
      return {
        custom: "data",
        entries: entries,
      };
    } catch (err) {
      return err;
    }
  },
};
