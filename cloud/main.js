
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('helloVersionTwo', function(req, res) {
  res.success('Hi there, this is the new response');
});
