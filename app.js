const secondHand = document.querySelector('.second-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = (seconds/ 60) * 360;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`
    console.log(seconds);
}
setInterval(setDate,1000);