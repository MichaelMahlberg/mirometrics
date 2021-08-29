# Installing plugin for local development

1. Create new miro plugin
   1. go to Miro -> Profile settings -> Your Apps
   2. agree to conditions and create new app
   3. set app url to https://localhost:(your port)/folder_for_your_plugin
   4. set permissions for boards:read and boards:write
   5. Install to your team
2. locally install http-server (we used npm)
   1. you can find info here: [npm-site]( )
   2. install: `npm install http-server`
   3. Create a local SSL-authority and corresponding certificates following [these instructions from stack overflow](https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate#answer-60516812)
   4. create entry in package.json 
   This example uses localhost as the filename
   ```
   "scripts": {
      "serve": "npx http-server -S -C localhost.crt -K localhost.key"
   },
   ```
   5. run `npm run serve`
3. Dont forget to use your Dev App Client ID in your code, when you use metadata sruff (that currently is broken anyway) :D.