### Notion invites bot
Bot for illegal gathering emails and messages from user and keeping it in txt files in src folder

### Getting Started
1) Enter your token in src/index.ts file instead off `TOKEN` string
```typescript
const token: string = "TOKEN";
```
2) Install packages
```bash
sudo apt update && sudo apt install nodejs
npm install
```
3) Run bot
```bash
npm run start
```
### Start in background
You can run your bot in background with pm2 tool
```bash
npm install pm2 -g
pm2 start ./ --name notion_bot # Launch bot
pm2 l # List of launched apps
pm2 delete notion_bot # Delete process of launched bot
```

### License
Do whatever you want, but don't present this bot as a product for Ilya Zelenchuk 
