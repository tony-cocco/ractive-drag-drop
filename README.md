# ractive-drag-drop
A drag-and-drop Ractive library to hook into HTML5 drag-and-drop events.

Inspiration from: https://github.com/Nijikokun/ractive.drag.drop.js

# Usage

- Include the `ractive.drag.drop.js` file after including `Ractive`.

- Add the events you care about to your elements:

```
<div on-dragstart="drag-start" on-dragend="drag-end" ...>
```

- And in your Ractive controller:

```
Ractive.extend({
  // ...
  oninit: function() {
    this.on('drag-start', function onDragStart(ev) { /* ... */ }; );
    this.on('drag-end', function onDragEnd(ev) { /* ... */ }; );
  }
  // ...
});
```

# Further Reading

This handy [w3 tutorial](http://www.w3schools.com/html/html5_draganddrop.asp).
