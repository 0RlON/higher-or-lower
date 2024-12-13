function generateRandom() {
    var resultParagraph = document.getElementById("result");
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random)
    resultParagraph.innerHTML = random;
}

var oldRandom = random;
var newRandom = Math.floor(Math.random() * 100 + 1);

function higher() {
    if (newRandom > oldRandom) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function lower() {
    if (newRandom < oldRandom) {
        window.alert("You Win!")
    } else {
        window.alert("You Lose!")
    }
}

function sameNumber() {
    if (newRandom == oldRandom) {
        window.alert("It was the same number, nothing happens!")
    }
}