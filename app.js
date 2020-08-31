setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour]');
const minuteHand = document.querySelector('[data-minute]');
const secondHand = document.querySelector('[data-second]');



function setClock(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/60;
    const minutes = (seconds+currentDate.getMinutes())/60;
    const hours = (minutes+currentDate.getHours())/12;
    rotationClock(secondHand, seconds);
    rotationClock(minuteHand, minutes);
    rotationClock(hourHand, hours);
}

function rotationClock(element,rotationType){
    element.style.setProperty('--rotation', rotationType*360);
}


setClock()


