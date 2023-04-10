var socket = new WebSocket('ws://localhost:9000/ws');

let connect = (cb) => {
    console.log('connecting')
    socket.onopen = () => {
        console.log("successful");
    }
    socket.onmessage = (msg) => {
        console.log("message from websocket: ", msg);
    }
    socket.onclose = (event) => {
        console.log("socket closed sonnection: ", event)
    }
    socket.onerror = (error) => {
        console.log("socket error: ", error)
    }
}

let sendMsg = (msg) => {
    console.log("sending msg:", msg);
    socket.send(msg);
}

export {connect, sendMsg};