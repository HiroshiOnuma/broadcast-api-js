import { Broadcast } from "./Broadcast.js";
const bc = new Broadcast("broadcast");
const sendButton = document.querySelector(".send-button");
const inputText = document.querySelector(".input-text");
const sendContent = document.querySelector(".send-content");
const receiveContent = document.querySelector(".receive-content");

sendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const message = {
        id: "server",
        type: "text",
        value: inputText.value
    }

    sendContent.textContent = message.value;
    bc.post(message);
});

bc.onMessage((data) => {
    if (data.id !== "client") return;

    // 通常メッセージ
    if (data.type === "text") {
        receiveContent.textContent = data.value;
    }

    // 計算リクエスト
    if (data.type === "calc") {
        const a = Number(data.valueA);
        const b = Number(data.valueB);
        const result = a + b;

        bc.post({
            id: "server",
            type: "calc-result",
            result
        });
    }
});
