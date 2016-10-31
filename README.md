# Stopwatch Exercise

Implement a stopwatch and lap timer.

There should be four buttons: Start, Stop, Split, and Reset, along with a
display of the current time, and a list of lap times.

# Criteria

- Pressing the Start button starts the timer. The "current time" display should
  show the number of seconds, to the closest hundredth of a second, since the
  Start button was last pressed.
- Pressing the Stop button should stop the timer. The "current time" display
  should show the amount of time, to the closest hundredth of a second, between
  pressing the Start and Stop buttons.
- Pressing the Split button should add a new time to the Lap list. The value
  of the new lap should be the value of the timer. The timer itself should
  remain unchanged. The Split button should be unavailable while the timer is
  stopped.
- Pressing the Reset button should reset the timer to zero and empty the list
  of lap times. The Reset button should be unavailable while the timer is
  running.

# Extra Credit

- Professional stopwatches have only two buttons: Start/Stop and Split/Reset.
  Condense the four buttons implemented above to these two.
- Though ambiguous above, ensure that multiple Start/Stop sequences would be
  cumulative: each Start beginning the timer from where the previous Start left
  off.
- Add multiple lap time lists for multiple athletes: these lists should be
  nameable accordingly.
- Preserve the state of the lap time list and timer across refreshes.
- **Far more difficult:** Synchronize the state of the application across
  browser instances.
