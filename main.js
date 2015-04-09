console.log("#-- Node.JS TCP Pass-through --#");
console.log("#------------------------------#");

var net = require("net");
var config = require("./config.js");

console.log("Connecting to " + config.ip + ":" + config.port + ".");
console.log("Listening on port " + config.listen + "\n");

net.createServer(function (socket) {
	var client = new net.Socket();

	client.connect(config.port, config.ip, function() {

		// client = server
		// socket = client

		socket.on('data', function (data) {
			client.write(data);
			console.log(socket.remoteAddress + " --> " + client.remoteAddress + " : " + data);
		});

		socket.on('end', function () {
			client.destroy();
		});

		client.on("data", function (data) {
			socket.write(data);
			console.log(client.remoteAddress + " --> " + socket.remoteAddress + " : " + data);
		});

		client.on("close", function (data) {

		});

	});

}).listen(config.listen);