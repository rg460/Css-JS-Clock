const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = ((seconds/ 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`
    
    const mins  = now.getMinutes();
    const minsDegress = ((mins/ 60) * 360) + 90;
    min
}
setInterval(setDate,1000);