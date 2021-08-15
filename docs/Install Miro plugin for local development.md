# Installing plugin for local development

1. Create new miro plugin
   1. go to Miro -rofile settings -> Your Apps
   2. agree to conditions and create new app
   3. set app url to https://localhost:(your port)/folder_for_your_plugin
   4. set permissions for boards:read and boards:write
   5. Install to your team
2. locally install http-server (we used npm)
   1. you can find info here: [npm-site](https://www.npmjs.com/package/http-server)
   2. install: `npm install http-server`
   3. create certificate: ` openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem > cert.pem`
      - use "localhost" as common name
   4. create entry in package.json 
   ```
   "scripts": {
      "serve": "npx http-server -S -C cert.pem"
   },
   ```
   5. run `npm run serve`
   6. open browser and accept certificate
3. Dont forget to use your Dev App Client ID in your code, when you use metadata sruff (that currently is broken anyway) :D.