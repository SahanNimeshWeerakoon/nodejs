// Node myFile.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // Check one: Any pending setTimout, setInterval, setImmediate?
    // Check two: Any pending Os tasks? (server listening to port)
    // Check trhee: any pending long running operations? (Like fs module)
    return pendingTimers.length || pendingOsTasks.length || pendingOperations.length;
}

// entire body executes in one 'tick'
while(shouldContinue()) {
    // Node looks at pending timers and sees if any functions ready to called (setTimeout / setIntervals)
    // node look at pending Os Tasks and pending operations and calls relevenat callbacks
    // pause execution. Continue when ... a new pendingOsTask id done or new pendingOperations is done or when ever a timer is about to complete
    // Look at pendingTimers. Call any setImmediate
    // Handle any 'close' events
}

// Exit back to terminal