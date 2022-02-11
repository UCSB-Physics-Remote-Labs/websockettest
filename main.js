let header = document.getElementById("header");
let textInput = document.getElementById("wsCmd")

//Create Websocket and connect to raspberry pi
const socket = new WebSocket('ws://raspberrypi:8081')

// When text is entered and the "Enter" key is hit do something with the value.
// Maybe just have the raspberrry pi print the text.
textInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        //When enter key goes up send the text
        // to the pi.
        header.textContent=event.target.value;
    }
})