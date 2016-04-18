var Ractive = require('ractive'); // Remove this line if you're NOT using browserify.

Ractive.events.dragstart = function (node, fire) {
  var Drag = {
    event: function (name) {
      return function (event) {
        fire({
          node: node,
          name: name,
          type: name.split('_')[1],
          target: this,
          original: event
        });
      };
    }
  };

  var evHandler;
  node.addEventListener('dragstart', evHandler = Drag.event('drag_start'));

  return {
    teardown: function () {
      node.removeEventListener('dragstart', evHandler);
    }
  };
};

Ractive.events.dragenter = function (node, fire) {
  var Drag = {
    event: function (name) {
      return function (event) {
        fire({
          node: node,
          name: name,
          type: name.split('_')[1],
          target: this,
          original: event
        });
      };
    }
  };

  var evHandler;
  node.addEventListener('dragenter', evHandler = Drag.event('drag_enter'));

  return {
    teardown: function () {
      node.removeEventListener('dragenter', evHandler);
    }
  };
};

Ractive.events.dragover = function (node, fire) {
  var Drag = {
    event: function (name) {
      return function (event) {
        fire({
          node: node,
          name: name,
          type: name.split('_')[1],
          target: this,
          original: event
        });
      };
    }
  };

  var evHandler;
  node.addEventListener('dragover', evHandler = Drag.event('drag_over'));

  return {
    teardown: function () {
      node.removeEventListener('dragover', evHandler);
    }
  };
};

Ractive.events.dragleave = function (node, fire) {
  var Drag = {
    event: function (name) {
      return function (event) {
        fire({
          node: node,
          name: name,
          type: name.split('_')[1],
          target: this,
          original: event
        });
      };
    }
  };

  var evHandler;
  node.addEventListener('dragleave', evHandler = Drag.event('drag_leave'));

  return {
    teardown: function () {
      node.removeEventListener('dragleave', evHandler);
    }
  };
};

Ractive.events.drop = function (node, fire) {
  var Drag = {
    event: function (name) {
      return function (event) {
        fire({
          node: node,
          name: name,
          type: name.split('_')[1],
          target: this,
          original: event
        });
      };
    }
  };

  var evHandler;
  node.addEventListener('drop', evHandler = Drag.event('drag_drop'));

  return {
    teardown: function () {
      node.removeEventListener('drop', evHandler);
    }
  };
};

Ractive.events.dragend = function (node, fire) {
  var Drag = {
    event: function (name) {
      return function (event) {
        fire({
          node: node,
          name: name,
          type: name.split('_')[1],
          target: this,
          original: event
        });
      };
    }
  };

  var evHandler;
  node.addEventListener('dragend', evHandler = Drag.event('drag_end'));

  return {
    teardown: function () {
      node.removeEventListener('dragend', evHandler);
    }
  };
};
