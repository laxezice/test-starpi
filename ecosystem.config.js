module.exports = {
  apps: [
    {
      name: "startpi",
      script: "yarn",
      args: "start",
    },
  ],

  deploy: {
    develop: {
      user: "digitalsetup-strapi-user",
      host: "159.89.196.226",
      ref: "origin/main",
      repo: "https://github.com/laxezice/test-starpi.git",
      path: "/home/digitalsetup-strapi-user/htdocs/strapi.digitalsetup.co",
      "pre-deploy-local": "",
      "post-setup": "npm i && npm run build",
      "post-deploy": "npm -v",
      "pre-setup": "",
    },
  },
};
