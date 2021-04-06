const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');

function setDate() {
    const now= new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)* 360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes= now.getMinutes();
    const minuteDegrees = ((minutes/60)* 360)+90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours= now.getHours();
    const hourDegrees = ((hours/60)* 360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds ===0){
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    }
}
setInterval(setDate, 1000);