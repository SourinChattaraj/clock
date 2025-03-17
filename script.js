const secondHand =document.getElementById('second_hand')
const hourHand=document.getElementById('hour_hand')
const miniteHand=document.getElementById('minite_hand')

function clocktick(){
    const data = new Date()
    const second= data.getSeconds()/60
    const minite=(second+data.getMinutes())/60
    const hours = (minite + data.getHours())/12

    rotateClock(secondHand, second)
    rotateClock(miniteHand, minite)
    rotateClock(hourHand, hours)
}
function rotateClock(element, rotation){
    element.style.setProperty('--rotate', rotation* 360)
}
setInterval(clocktick,1000)