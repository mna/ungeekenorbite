// Just a basic server setup for this site
var Connect = require('connect');

/*
 * Resultat de la creation de l'application sur nodester.com:
 * {"status":"success","port":9346,
 *  "gitrepo":"ec2-user@nodester.com:/node/hosted_apps/puerkitobio/1193-c0eb17a63c110c2c8128089d77ff255a.git",
 *  "start":"app.js","running":false,"pid":"unknown"}
*/
module.exports = Connect.createServer(
  Connect.logger(),
  //Connect.conditionalGet(),
  //Connect.favicon(),
  //Connect.cache(),
  //Connect.gzip(),
  require('wheat')(__dirname)
).listen(9346);

