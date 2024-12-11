function generateRandom() {
    var resultParagraph = document.getElementById("result");
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random)
    resultParagraph.innerHTML = random;
}

function higher(random) {
    if (random > higher) {
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