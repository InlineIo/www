const exampleSocket = new WebSocket("ws://localhost:3010/");
exampleSocket.onmessage = function (event) {
  console.log(event.data);
};
exampleSocket.onopen = function () {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return "";
}