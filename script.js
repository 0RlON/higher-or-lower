function generateRandom() {
    var resultParagraph = document.getElementById("result");
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random)
    resultParagraph.innerHTML = random;
}

sessionStorage.setItem("baseRandom", random)
var newRandom = Math.floor(Math.random() * 100 + 1);

function higher(newRandom) {
    if (newRandom > sessionStorage.getItem("baseRandom")) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function lower(newRandom) {
    if (newRandom < sessionStorage.getItem("baseRandom")) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function sameNumber(newRandom) {
    if (newRandom == sessionStorage.getItem("baseRandom")) {
        window.alert("It was the same number, nothing happens!")
    }
}