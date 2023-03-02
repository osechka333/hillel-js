const URL = 'ws://localhost:8080';

export default class Chat {
  constructor(options) {
    this.options = options;
    this.ws = new WebSocket(URL);
    this.ws.onopen = this.onopen;
    this.ws.onmessage = this.onmessage.bind(this);
  }

  onopen() {
    console.log('Connection with server was established');
  }

  onmessage(event) {
    const message = JSON.parse(event.data);

    this.options.onMessage(message);
  }

  send(message) {
    this.ws.send(JSON.stringify(message));
  }
}