let header = document.getElementById("header");
let textInput = document.getElementById("wsCmd")

//Create Websocket and connect to raspberry pi
const websocket = new WebSocket('ws://192.168.0.150:8081');

// When text is entered and the "Enter" key is hit do something with the value.
// Maybe just have the raspberry pi print the text.
textInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        //When enter key goes up send the text
        // to the pi.
        header.textContent=event.target.value;
    }
})