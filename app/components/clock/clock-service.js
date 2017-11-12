function ClockService() {

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
            return i
        }
    }

    this.clock = function clock() {
        var today = new Date()
        var hours = today.getHours()
        var minutes = today.getMinutes()
        var seconds = today.getSeconds()

        checkTime(minutes)
        checkTime(seconds)

        return today
    }
}