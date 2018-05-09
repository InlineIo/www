function getConfig(config) {
  return {
    clientID: config.githubClientId,
    clientSecret: config.githubSecret,
    callbackURL: config.callbackURL
  };
}

module.exports = (config) => {
  const Strategy = require("passport-github2").Strategy;
  return new Strategy(getConfig(config), (accessToken, refreshToken, profile, done) => {
    let avatar = null;
    try {
      avatar = JSON.parse(profile._raw).avatar_url;
    } catch (error) { }
    const { username, displayName } = profile;
    done(null, {
      accessToken,
      refreshToken,
      profile: {
        username,
        name: displayName,
        provider: "github",
        photo: avatar
      }
    });
  });
};