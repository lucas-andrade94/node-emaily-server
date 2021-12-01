const passport = require("passport");

module.exports = (app) => {
  // starting authentication
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // getting authentication code
  app.get("/auth/google/callback", passport.authenticate("google"));

  // logout user
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // show current user data
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
