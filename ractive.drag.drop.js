var Ractive = require('ractive'); // Remove this line if you're NOT using browserify.
var events = ['dragstart', 'dragenter', 'dragover', 'dragleave' , 'drop', 'dragend'];

events.map(function(htmlEvent) {
  Ractive.events[htmlEvent] = function(node, fire) {
    var evHandler = function(event) {
      fire({
        node: node,
        name: name,
        type: htmlEvent,
        target: this,
        original: event
      });
    };
    node.addEventListener(htmlEvent, evHandler);

    return {
      teardown: function () {
        node.removeEventListener(htmlEvent, evHandler);
      }
    };
  }
});
