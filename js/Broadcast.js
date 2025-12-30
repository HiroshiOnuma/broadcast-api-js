export class Broadcast {
    constructor(channelName) {
        this.bc = new BroadcastChannel(channelName);
        this._onPagehide = () => this.close();
        window.addEventListener("pagehide", this._onPagehide);
    }
    post(message) {
        this.bc.postMessage(message);
    }

    onMessage(handler) {
        this.bc.addEventListener("message", (e) => {
            handler(e.data);
        });
    }

    close() {
        this.bc.close();
        window.removeEventListener("pagehide", this._onPagehide);
    }

}