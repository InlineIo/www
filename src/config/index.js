module.exports = (env) => {
  return {
    sessionSecret: env.SESSION_SECRET || "tartufo",
    githubClientId: env.GH_CLIENT_ID,
    githubSecret: env.GH_SECRET,
    scopes: ["repo", "read:org"],
    tokenSecret: "2749514351v03nwfqwevw9e8r-qwe8r",
    tokenCookieName: "inline",
    profileCookieName: "inline-profile",
    cookieDomain: "localhost",
    callBackURL: "http://localhost:3000/github/callback",
    maxAge: 24 * 60 * 60 * 1000
  };
};