### Notion invites bot
Bot for illegal gathering emails and messages from users and keeping it in txt files

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
### Formating emails to single string
You can make on single line of emails from gathering emails
```bash
cat ./src/input.txt' | python3 -c "import sys; homka = ','.join([x.split('] ')[1].split(' ')[2][:-1] for x in sys.stdin]); print(); print(homka)"
```
After that you'll string with format:
```bash
example@gmail.com,example2@gmail.com,homka@yahoo.com,vacman@email.email
```

### License
Do whatever you want, but don't present this bot as a product for Ilya Zelenchuk 
