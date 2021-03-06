#!/usr/bin/env node
"use strict";

var _opts = require("opts");

var _opts2 = _interopRequireDefault(_opts);

var _package = require("../package.json");

var _package2 = _interopRequireDefault(_package);

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

var _bopen = require("bopen");

var _bopen2 = _interopRequireDefault(_bopen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = _package2.default.version;

_opts2.default.parse([{
    short: "v",
    long: "version",
    description: "Show the version",
    required: false,
    callback: function callback() {
        console.log(version);
        return process.exit(1);
    }
}, {
    short: "p",
    long: "port",
    description: "Specify the port",
    value: true,
    required: false
}, {
    short: "d",
    long: "debug",
    description: "Debug mode, display log in console",
    value: true,
    required: false
}], true);

var port = _opts2.default.get('port') || 8888;
var debug = _opts2.default.get('debug') || false;

(0, _app2.default)(port, debug);
// Open URL in default browser
setTimeout(function () {
    (0, _bopen2.default)("http://127.0.0.1:" + port);
}, 500);