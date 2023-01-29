const URL = 'ws://localhost:8080';

export default class Chat {
    constructor(options) {
        this.options = options;
       this.ws = new WebSocket(URL);
       this.ws.onopen = this.onopen;
       this.ws.onmessage = this.onmessage.bind(this);
    }
    onopen() {
        console.log('Websocket is connected');
    }
    onmessage(e) {
        const userInput = JSON.parse(e.data);
        this.options.onMessage(userInput);
    }
    send(message) {
        this.ws.send(JSON.stringify(message));
    }
}