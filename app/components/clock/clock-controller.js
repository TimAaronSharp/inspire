function ClockController(){
    var clockService = new clockService()

    this.drawClock = function drawClock(){
        clockService.clock()

        var clockElem = document.getElementById('clock-area')
        var clockTemplate = ''
        
    }
}