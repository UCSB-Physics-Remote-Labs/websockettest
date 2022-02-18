let header = document.getElementById("header");
let textInput = document.getElementById("wsCmd")

//Create websocket and connect to server (raspberry pi)
const websocket = new WebSocket('ws://192.168.0.150:8081');

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