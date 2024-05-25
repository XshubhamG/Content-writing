//* DOM elements
const timerBtn = document.querySelector('.startpause')
const minutes = document.querySelector('.minutes input')
const seconds = document.querySelector('.seconds input')
const settings = document.querySelector('.settings')
const timer = document.querySelector('.timer')
const ring = document.querySelector('.ring')

//* variables
let timeInterval
let minVal = +minutes.value
let secVal = +seconds.value
let totalSeconds = minVal * 60 + secVal
let isPaused = true

//* event listeners
timerBtn.addEventListener('click', () =>
  isPaused ? startTimer(timerBtn) : pauseTimer(timerBtn),
)
settings.addEventListener('click', setupTimer)

//? settings Function
function setupTimer() {
  if (minutes.hasAttribute('disabled')) {
    minutes.removeAttribute('disabled')
    seconds.removeAttribute('disabled')

    timerBtn.setAttribute('disabled', '')
  } else {
    minutes.setAttribute('disabled', '')
    seconds.setAttribute('disabled', '')

    timerBtn.removeAttribute('disabled')
  }

  minVal = +minutes.value
  secVal = +seconds.value
  totalSeconds = minVal * 60 + secVal
}

//? startTimer  Function
function startTimer(btn) {
  isPaused = false
  btn.textContent = 'pause'
  timeInterval = setInterval(updateTimer, 1000)
  ring.classList.add('ending')
}

//? pauseTimer Function
function pauseTimer(btn) {
  isPaused = true
  btn.textContent = 'start'
  clearInterval(timeInterval)
  ring.classList.remove('ending')
}

//? pad Function
function pad(val) {
  return val > 9 ? val : '0' + val
}

//? updateTimer Function
function updateTimer(m, s) {
  totalSeconds--
  updateTimerDisplay(m, s)
}

//? updateTimerDisplay Function
function updateTimerDisplay() {
  const min = Math.floor((totalSeconds % 3600) / 60)
  const sec = Math.floor(totalSeconds % 60)
  minutes.value = pad(min)
  seconds.value = pad(sec)

  if (totalSeconds === 0) {
    clearInterval(timeInterval)
    ring.classList.add('ending')
    alert("Time's up!")
  }
}

//? Initial call
updateTimerDisplay(minutes, seconds)
