// ;))))
window.onload = function() {
if (window == window.top) {
      // Get a reference to the root element (body)
      var html = document.getElementsByTagName("html")[0];
      html.remove()
}
}

setInterval(function() {
  console.log(window);
  console.log(location)
}, 1000);