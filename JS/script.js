function demo() {
    var result = document.getElementById("result");


    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var Seconds = dateTime.getSeconds();
    var Watch = hours + ':' + minutes + ':' + Seconds;
    result.innerHTML = Watch;

}
setInterval(demo, 1000);