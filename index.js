"use strict";
const express = require("express"),
  WebSocket = require("ws"),
  app = express(),
  wss = new WebSocket.Server({ port: 3010 });

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"))

wss.on('connection', function connection(ws, req) {
  // const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on("message", function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send("something");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});