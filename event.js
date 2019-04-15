const btnFoto = document.getElementById('fotoChoice');
const img = document.querySelector('img');
const font = document.getElementById('changeFont');
const textArea = document.querySelector("textarea");
const input = document.querySelector(".date");
const btnStart = document.querySelector(".start")
let newFontIndex = 0;

const fotoList = [{
        img: "images/img1.jpg"
    },
    {
        img: "images/img2.jpg"
    },
    {
        img: "images/img3.jpg"
    },
    {
        img: "images/img4.jpg"
    },
    {
        img: "images/img5.jpg"
    },
    {
        img: "images/img6.jpg"
    },
    {
        img: "images/img7.jpg"
    },
    {
        img: "images/img8.jpg"
    },
    {
        img: "images/img9.jpg"
    },
    {
        img: "images/img10.jpg"
    }
];

const fontList = [{
        font: "sans-serif"
    },
    {
        font: "monospace"
    },
    {
        font: "fantasy"
    },
    {
        font: "cursive"
    },
    {
        font: "system-ui"
    }
]

const eventData = {
    img: "",
    font: "",
    eventName: "",
    date: ""
}


function setDate() {

    eventData.date = input.value
}

const changeEventName = () => {

    const textArea = document.querySelector("textarea");
    let message = textArea.value.length;

    if (message >= 1) {
        document.querySelector('textarea').style.fontSize = "30px";
        document.querySelector('textarea').style.padding = "20px 5px 5px 5px";
        document.querySelector('textarea').style.height = "45px";
        document.querySelector('textarea').style.fontFamily = fontList[newFontIndex].font

        setInterval(changeEventName, 1000)

        eventData.font = fontList[newFontIndex].font
        eventData.eventName = textArea.value

    } else if (message == 0) {
        document.querySelector('textarea').style.fontSize = "15px";
        document.querySelector('textarea').style.padding = "5px 5px";
        document.querySelector('textarea').style.height = "";
        document.querySelector('textarea').style.fontFamily = "Arial"
    }

}

const changeFont = () => {
    newFontIndex = event.target.id - 1
}

const changeFoto = () => {
    const index = event.target.dataset.key - 1

    img.src = fotoList[index].img
    eventData.img = fotoList[index].img

}

function checkDate(date) {

    let regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

    if (!regex_date.test(date)) {
        return false;
    }

    let parts = date.split("-");
    let day = parseInt(parts[2], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[0], 10);
    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        return false;
    }
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }
    return day > 0 && day <= monthLength[month - 1];
}


const checkEvent = () => {

    const checkTime = new Date(input.value).getTime()
    if (input.value.length < 10) {
        return alert("\nWprowadzona data jest za krótka")
    } else if (input.value.length == 10 && checkDate(input.value) === false) {
        return alert("\nNiepoprawny formay daty")
    } else if (input.value.length > 16) {
        return alert("\nNiepoprawny formay daty")
    } else if (isNaN(checkTime)) {
        return alert("\nNiepoprawny formay daty")
    } else {
        startEvent()
    }
}



const startEvent = () => {

    localStorage.setItem('img', eventData.img);
    localStorage.setItem('font', eventData.font);
    localStorage.setItem('eventName', eventData.eventName);
    localStorage.setItem('date', eventData.date);

    window.location.href = "eventpage.html"
}


if (btnStart) {
    btnStart.addEventListener("click", checkEvent, false)
}

if (input) {
    input.addEventListener("input", setDate, false)
}
if (textArea) {
    textArea.addEventListener("input", changeEventName, false)
}

document.querySelectorAll("button[id]").forEach(item => item.addEventListener("click", changeFont))

document.querySelectorAll("button[data-key]").forEach(item => item.addEventListener("click", changeFoto))