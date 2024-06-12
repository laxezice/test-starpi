export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
  nvm use default
  echo "NVM and Node set up"
  pm2 start ecosystem.config.js
else
  echo "NVM not found"
fi