const countdownTimer = document.getElementById("countdownTimer");
const goalsTeam1 = document.getElementById("goalsTeam1");
const goalsTeam2 = document.getElementById("goalsTeam2");
const timeInit = 2700;
let elapsedTime;
let isStarted = false;
let timer;

const updateTimerDisplay = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownTimer.innerHTML = `${minutes}:${seconds}`; 
}

const startTimer = () => {
    if (isStarted) {
        return;
    }
    isStarted = true;
    timer = setInterval(() => {
        elapsedTime = elapsedTime ??  timeInit;
        elapsedTime -= 1;
        updateTimerDisplay(elapsedTime);
        if (elapsedTime <= 0) {
            clearInterval(timer);
        }
    }, 1000);

}

const stopTimer = () => {
        isStarted = false;
        clearInterval(timer);
}

const addGoal = (team) => {
    if (!isStarted) {
        return;
    }

    if (team === 1) {
        goalsTeam1.innerHTML = parseInt(goalsTeam1.innerHTML) + 1;
    }

    if (team === 2) {
        goalsTeam2.innerHTML = parseInt(goalsTeam2.innerHTML) + 1;
    }
}
