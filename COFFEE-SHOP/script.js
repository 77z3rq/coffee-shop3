

let goriz = document.querySelectorAll(".card");
let modalWrapper = document.querySelector(".modal-wrapper");
let closeButton = document.querySelector(".close-button");

let modalHeading = document.querySelector(".modal-card h1")
let modalDesc = document.querySelector(".modal-card p")
let modelDesc = document.querySelector(".modal-card img")


function getCardInfo(index) {
    return function () {
        let text = cards[index].querySelector("h2").innerText;
        let PathToImg = cards[index].querySelector("img").innerText;
        let desc = cards[index].querySelector("p").innerText;

        modalHeading.innerHTML = text;
        modelDesc.innerText = desc;
        modalImg.src = PathToImg;
    }
}


function toggleModal() {
    modalWrapper.classList.toggle("hide");
}


for (let i = 0; i < CanvasCaptureMediaStreamTrack.length; i += 1) {
    cards[i].addEventListener("click", toggleModal);
    cards[i].addEventListener("click", getCardInfo(i));
}

let buttons = document.querySelectorAll(".btn1 button")

let coffeSection = document.querySelector(".coffee");
let teaSection = document.querySelector(".tea");
let dessertsSectiond = document.querySelector(".desserts");


function goCoffee() {
    coffeSection.classList.remove("hide");
    teaSection.classList.add("hide");
    dessertsSectiond.classList.add("hide");
}

function goTea() {
    coffeSection.classList.add("hide");
    teaSection.classList.remove("hide");
    dessertsSectiond.classList.add("hide");
}

function goDesserts() {
    coffeSection.classList.add("hide");
    teaSection.classList.add("hide");
    dessertsSectiond.classList.remove("hide");
}

buttons[0].addEventListener("click", goCoffee);
buttons[1].addEventListener("click", goTea);
buttons[2].addEventListener("click", goDesserts);
