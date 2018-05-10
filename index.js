"use strict";
const express = require("express"),
  WebSocket = require("ws"),
  app = express(),
  cookieParser = require("cookie-parser"),
  expressSession = require("express-session"),
  passport = require("passport"),
  config = require("./src/config")(process.env),
  strategy = require("./src/auth")(config),
  routes = require("./src/routes")(passport, config),
  MemoryStore = require("session-memory-store")(expressSession),
  github = require("octonode"),
  jwt = require("jsonwebtoken"),
  wss = new WebSocket.Server({ port: 3010 });

app.use(express.static("public"));

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app.use(cookieParser())
app.use(expressSession({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new MemoryStore()
}))
app.use(passport.initialize());
app.get("/github", routes.onAuthenticationRequest);
app.get("/github/callback", routes.onAuthenticationCallback);
app.get("/logout", routes.onLogout);

app.get("/organizations", (req, res) => {
  const jwtoken = req.cookies[config.tokenCookieName];
  const token = jwt.decode(jwtoken);
  const client = github.client(token.accessToken);
  const ghme = client.me();
  ghme.orgs((err, orgs) => {
    if (err) {
      console.log("err", err);
      res.status(500).send({ err });
      return;
    }
    res.send(orgs);
  });
});

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