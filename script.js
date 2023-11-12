function main() {
    let socket = io();
    let chatDiv = document.getElementById('chat');
    let input = document.getElementById('message');
    let button = document.getElementById('submit');

    function handleSubmit() {
        console.log("jkjkjkjkjkjkj");
        let val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
}


window.onload = main;
