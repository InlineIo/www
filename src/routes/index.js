function cookieOpts({ httpOnly, reset = false, domain, maxAge = false }) {
  return {
    secure: domain !== "localhost",
    httpOnly,
    domain,
    expires: reset ? new Date() : null,
    maxAge: !reset ? maxAge : maxAge
  };
}

module.exports = (passport, config) => {
  const jwt = require("jsonwebtoken");
  return {
    onAuthenticationRequest: (req, res, next) => {
      const type = req.path.split('/')[1],
        opts = {
          scope: config.scopes
        };
      passport.authenticate(type, opts)(req, res, next)
    },
    onAuthenticationCallback: (req, res) => {
      const type = req.path.split('/')[1];
      passport.authenticate(type, (error, user) => {
        if (error || !user) {
          console.log("ERROR NO USER!");
          res.cookie(config.tokenCookieName, '', cookieOpts({
            reset: true,
            httpOnly: true,
            domain: config.cookieDomain
          }));
          res.cookie(config.profileCookieName, JSON.stringify({ error: error || 'No user was returned' }), cookieOpts({
            httpOnly: false,
            domain: config.cookieDomain,
            maxAge: config.maxAge
          }));
        }
        if (user) {
          res.cookie(config.tokenCookieName, jwt.sign(user, config.tokenSecret), cookieOpts({
            httpOnly: true,
            domain: config.cookieDomain,
            maxAge: config.maxAge
          }));
          res.cookie(config.profileCookieName, JSON.stringify(user.profile), cookieOpts({
            httpOnly: false,
            domain: config.cookieDomain,
            maxAge: config.maxAge
          }));
        }
        res.redirect("/");
      })(req, res)
    },
    onLogout: (req, res) => {
      res.cookie(config.tokenCookieName, "", cookieOpts({
        reset: true,
        httpOnly: true,
        domain: config.cookieDomain
      }));
      res.cookie(config.profileCookieName, "", cookieOpts({
        reset: true,
        httpOnly: false,
        domain: config.cookieDomain
      }));
      res.redirect("/");
    }
  };
};