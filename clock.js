const imgEvent = document.querySelector('img');
let img = localStorage.getItem('img')
let font = localStorage.getItem('font')
let eventName = localStorage.getItem('eventName')
let date = localStorage.getItem('date')

const startEvent = () => {
    if (img === "") {
        imgEvent.src = "images/img1.jpg"
    } else imgEvent.src = img

    document.getElementById("eventName").textContent = eventName
    document.querySelector('.eventTekst').style.fontFamily = font

    setInterval(clock, 1000)

}

const clock = () => {

    const spanD = document.getElementById("d")
    const spanH = document.getElementById("h")
    const spanM = document.getElementById("m")
    const spanS = document.getElementById("s")

    const endTime = new Date(date).getTime()
    const nowTime = new Date().getTime()

    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)))
    if (days < 0) days = days - (days * 2)
    if (days >= 0 && days < 10) days = "0" + days
    spanD.textContent = days

    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24)
    if (hours < 0) hours = hours - (hours * 2)
    if (hours >= 0 && hours < 10) hours = "0" + hours
    spanH.textContent = hours

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60)
    if (minutes < 0) minutes = minutes - (minutes * 2)
    if (minutes >= 0 && minutes < 10) minutes = "0" + minutes
    spanM.textContent = minutes

    let secunds = Math.floor((endTime / 1000 - nowTime / 1000) % 60)
    if (secunds < 0) secunds = secunds - (secunds * 2)
    if (secunds >= 0 && secunds < 10) secunds = "0" + secunds
    spanS.textContent = secunds

}

window.addEventListener("load", startEvent)