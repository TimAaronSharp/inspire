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

    var greeting = ''
    function checkGreeting(j){
        if(j >= 0 && j < 5){
            greeting ="Can\'t sleep, Tim?"
        }
        else if(j >=5 && j < 12){
            greeting ='Good morning, Tim'
        }else if(j >=12 && j <18){
            greeting ='Good afternoon, Tim'
        }else{
            greeting ='Good evening, Tim'
        }
        return greeting
    }
    function drawClock() {
        var today = new Date()
        var hours = today.getHours()
        var minutes = today.getMinutes()
        var seconds = today.getSeconds()
        checkGreeting(hours)
        hours = checkMilitary(hours)
        minutes = checkTime(minutes)
        seconds = checkTime(seconds)

        document.getElementById('clock-area').innerHTML =` <h1 class="clock-size">${hours}:${minutes}:${seconds}<br> </h1> <span style="font-size: 3rem;">${greeting}</span>`
        setTimeout(drawClock, 500)
    }
    drawClock()
}