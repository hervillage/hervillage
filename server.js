var express = require('express');
var app = express();
var twilio = require('twilio');

var accountSid = process.env.twilioaccountSid;
var authToken = process.env.twilioauthToken;
var workspaceSid = process.env.twilioworkerspaceSid;

app.post("/twilio", function (request, response) {
  var name = request.query.name;
  var client = new twilio.TaskRouterClient(accountSid, authToken, workspaceSid);
  client.workspace.workers.create({
    friendlyName: name,
    // add services here, e.g. mentorship, childcare, etc.
    attributes: JSON.stringify({'type': 'resource'})
  });