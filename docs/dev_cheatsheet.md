## general 
```
docker build . -t kanbandocker
docker run --rm -it -v $(pwd)/:/src kanbandocker npm run test
docker ps -a // welche conatiner laufen oder auch nicht
docker images // zeigt dir alle layer images
docker run --rm -it -v $(pwd)/:/src kanbandocker npm test -- "--watchAll"
```

## Create pre-commit hook magic
`git config core.hooksPath .githooks` 

## Deploying to the live system:
`npm run deploy`   
(needs e.g. a local configuration file called .env thanks to https://www.npmjs.com/package/dotenv )

## How to share miro apps:
https://developers.miro.com/docs/share_your_app_wp

## Link to our Plugin as of 2021-04-21:
https://miro.com/oauth/authorize/?response_type=code&client_id=3074457348136685529&redirect_uri=https%3A%2F%2Fmiroplugins.devisive.de%2Fkanbantesting%2Fsuccess.html

See also [local development notes]("Install Miro plugin for local development.md")