# Mouse Tracker

Create a small app that does the following:

- track a user's mouse movements
- show the mouse position as a 20x20 circle component called `PositionIndicator` (file already exists)

Check out the [final result](https://8kxl0lvznl.codesandbox.io/) for visual acceptance criteria.

## Tips

- `PositionIndicator` should work off props only
- you can track the mouse position using an `onMouseMove` event
- you can get the mouse position from an event object using the `clientX` and `clientY` properties
- *you'll want to offset the position of the `PositionIndicator` circle to get it closer to the point of the mouse
- make sure to define propTypes for `PositionIndicator`

* Position top + left will put the top-most corner of the circle
at the mouse position.