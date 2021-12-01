if (process.env.NODE_ENV === "production") {
  // production env - return the prod keys
  module.exports = require("./prod");
} else {
  // development env - return the dev keys
  module.exports = require("./dev");
}
