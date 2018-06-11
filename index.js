const preferencesRoutes = require('./preferences_routes');

module.exports = function(app, db) {
  preferencesRoutes(app, db);
}