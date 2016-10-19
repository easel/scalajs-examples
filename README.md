# Integrating Scala.JS with CommonJS modules

To see this in action, browse to http://erik.labianca.org/scalajs-examples/

To build it yourself, run the following:
```
sbt fastOptJs
npm install -g http-server
http-server -c1
```

Browse to http://localhost:8080/index.html

The build has been configured with a jspm dependency cache as described at 
http://jspm.io/docs/production-workflows.html. To rebuild the cache,
run the following commands:

```
npm install -g jspm-cli
jspm update
jspm depCache target/scala-2.11/scala-js-examples-opt.js
```

