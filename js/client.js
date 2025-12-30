import { Broadcast } from "./Broadcast.js";
const bc = new Broadcast("broadcast");

const sendButton = document.querySelector(".send-button");
const sendNumButton = document.querySelector(".send-num-button");
const inputText = document.querySelector(".input-text");
const sendContent = document.querySelector(".send-content");
const resultContent = document.querySelector(".result-content");
const receiveContent = document.querySelector(".receive-content");

sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    const message = {
        id: "client",
        type: "text",
        value: inputText.value
    }

    sendContent.textContent = message.value;
    bc.post(message);
});

sendNumButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputNumA = document.querySelector(".input-a")
    const inputNumB = document.querySelector(".input-b")
    const message = {
        id: "client",
        type: "calc",
        valueA: inputNumA.value,
        valueB: inputNumB.value
    }
    bc.post(message);
})

bc.onMessage((data) => {
    if (data.id !== "server") return;
    if (data.type === "text") {
        receiveContent.textContent = data.value;
    }
    if (data.type === "calc-result") {
        resultContent.textContent = data.result;

    }
});


