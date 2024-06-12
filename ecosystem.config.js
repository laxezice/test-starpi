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
        'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use default && pm2 start ecosystem.config.js',
      "post-deploy":
        "bash /home/digitalsetup-strapi-user/htdocs/strapi.digitalsetup.co/current/deploy.sh",
      "pre-setup": "pwd",
    },
  },
};
