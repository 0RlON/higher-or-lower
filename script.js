function generateRandom() {
    var resultParagraph = document.getElementById("result");
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random)
    resultParagraph.innerHTML = random;
}

sessionStorage.setItem("baseNumber", random)
var newRandom = Math.floor(Math.random() * 100 + 1);

function higher(newRandom) {
    if (newRandom > sessionStorage.getItem) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function lower(random) {
    if (random < lower) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function sameNumber(random) {
    if (random == higher || random == lower) {
        window.alert("It was the same number, nothing happens!")
    }
}