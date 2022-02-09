module.exports = ({ env }) => ({
  url: env("https://workflow-api-s.herokuapp.com/"),
  proxy: true,
  app: { keys: env.array("APP_KEYS", ["myKey", "extraKey"]) },
});
