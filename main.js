let header = document.getElementById("header");
let textInput = document.getElementById("wsCmd")

//Create websocket and connect to server (raspberry pi)
var signalling_server_hostname = location.hostname;
var signalling_server_address = signalling_server_hostname + location.pathname + "ws2";
var protocol = location.protocol === "https:" ? "wss:" : "ws:";
var port = 8081;
var wsurl = protocol + '//' + signalling_server_address;

var websocket = new WebSocket(wsurl);

//Connected to websocket
websocket.addEventListener('open', function (event) {
    console.log('Connected to websocket server.');
});

//Disconnected from websocket
websocket.addEventListener('close', function (event) {
    console.log('Disconnected from websocket server.');
});

//Listen for messages
websocket.addEventListener('message', function (event) {
    console.log('Message from server:', event.data);
})

//Deliver message to server
textInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        //When enter key goes up, send text to pi
        websocket.send(event.target.value);
    }
})