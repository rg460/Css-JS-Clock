const { timeout } = require("nodemon/lib/config");

function setDate(){
    const date = new Date();
    const secondsDegress = (seconds/ 60) * 360;
    const seconds = now.getSeconds();
    console.log(seconds);
}
setInterval(setDate, timeout,1000);