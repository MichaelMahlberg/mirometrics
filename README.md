```
docker build . -t kanbandocker
docker run --rm -it -v $(pwd)/:/src kanbandocker npm run test
docker ps -a // welche conatiner laufen oder auch nicht
docker images // zeigt dir alle layer images
docker run --rm -it -v $(pwd)/:/src kanbandocker npm test -- "--watchAll"
```

How to share miro apps:
https://developers.miro.com/docs/share_your_app_wp

Link to our Plugin as of 2021-04-21:
https://miro.com/oauth/authorize/?response_type=code&client_id=3074457348136685529&redirect_uri=https%3A%2F%2Fmiroplugins.devisive.de%2Fkanbantesting%2Fsuccess.html
