var ssdpClient = require("./index.js")();

ssdpClient.subscribe("urn:schemas-upnp-org:service:AVTransport:1")
    .on("response", function(msg) {
        console.log("response", msg);
    }).on("alive", function(msg) {
        console.log("alive", msg);
    }).on("byebye", function(msg) {
        console.log("byebye", msg);
    });
