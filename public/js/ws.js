const exampleSocket = new WebSocket("ws://localhost:3010/");
exampleSocket.onmessage = function (event) {
  console.log(event.data);
};
exampleSocket.onopen = function () {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
