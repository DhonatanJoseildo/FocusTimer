import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import Sounds from "./sounds.js";
import Events from "./events.js";
import { elements } from "./elements.js";

// desistruturação
const { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sounds()

Events({controls, timer, sound})
