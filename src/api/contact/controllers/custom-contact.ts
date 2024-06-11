export default {
  async getCustomContact(ctx, next) {
    try {
      const data = await strapi
        .service("api::contact.custom-contact")
        .getCustomContact();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
