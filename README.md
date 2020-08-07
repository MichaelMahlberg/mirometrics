```
docker build . -t kanbandocker
docker run --rm -it -v $(pwd)/src:/src kanbandocker npm run test
docker ps -a // welche conatiner laufe oder auch nicht
docker images // zeigt dir alle layer images
docker run --rm -it -v $(pwd)/:/src kanbandocker npm test -- "--watchAll"
```


