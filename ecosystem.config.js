module.exports = {
  apps: [
    {
      name: "startpi",
      script: "npm",
      args: "run deploy",
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
      "post-setup":
        "bash /home/digitalsetup-strapi-user/htdocs/strapi.digitalsetup.co/current/setup.sh",
      "post-deploy":
        "bash /home/digitalsetup-strapi-user/htdocs/strapi.digitalsetup.co/current/deploy.sh",
      "pre-setup": "pwd && rm -rf ./source && rm -rf ./current",
    },
  },
};
