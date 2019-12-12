/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var xsenv = require("@sap/xsenv");
var xssec = require("@sap/xssec");
var hdbext = require("@sap/hdbext");
var express = require("express");
var passport = require("passport");
var stringifyObj = require("stringify-object");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

//subscribe/onboard a subscriber tenant
app.get("/callback/v1.0/tenants/*", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>ConcileTime</h1><h2>WARNING!</h2><br />";
	responseStr += "Tenant callback endpoint only allows PUT and DELETE methods to facilitate subscribe/unsubscribe.<br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});


// subscribe/onboard a subscriber tenant
app.put("/callback/v1.0/tenants/*", function (req, res) {
	var tenantAppURL = "https:\/\/" + req.body.subscribedSubdomain + ".conciletime.com";
	res.status(200).send(tenantAppURL);
});

// unsubscribe/offboard a subscriber tenant
app.delete("/callback/v1.0/tenants/*", function (req, res) {
	res.status(200).send("");
});

app.get("/login/*", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>ConcileTime</h1><h2>SUCCESS!</h2><br />";
	responseStr += "You have successfully logged in.<br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

app.get("/util/links", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>ConcileTime Utils</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/util/links\">This links page.</a><br />";
	responseStr += "<a href=\"/util/test\">Run Tests.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

app.get("/util/test", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>ConcileTime Utils</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/util/links\">Back to Links page.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

var server = require("http").createServer();
var port = process.env.PORT || 3000;

server.on("request", app);

server.listen(port, function () {
	console.info("Backend: " + server.address().port);
});
