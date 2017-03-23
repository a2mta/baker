var Datastore = require('nedb')
var bakes = new Datastore({
  filename: './bakes.db',
  autoload: true
});