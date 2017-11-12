function ClockController() {

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }
    function checkMilitary(i){
        if(i > 12){
            i -= 12
        }
        return i
    }

    this.clock = function clock() {


    }

    function drawClock() {
        var today = new Date()
        var hours = today.getHours()
        var minutes = today.getMinutes()
        var seconds = today.getSeconds()
        hours = checkMilitary(hours)
        minutes = checkTime(minutes)
        seconds = checkTime(seconds)



        document.getElementById('clock-area').innerHTML =` <h1 class="clock-size">${hours}:${minutes}:${seconds}</h1>`
        setTimeout(drawClock, 500)
    }
    drawClock()
}