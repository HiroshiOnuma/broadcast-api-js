# BroadcastChannel API を使用し、同一オリジンでのブラウザ間通信を行う。

## client.html
- iframeへメッセージを送信
- iframeからメッセージを受信
- iframeから受信したメッセージを表示
- iframeへ計算をリクエスト
- iframeから受け取った計算結果を表示

## iframe.html
- clientからメッセージを受信
- clientから受信したメッセージを表示
- clientへメッセージを送信
- clientから計算を受け取る
- clientへ計算結果を返す