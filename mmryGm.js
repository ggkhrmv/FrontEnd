let cards = [
    {name: "vivid", img: "vividIGlogoSmaller.png",},
    {name: "vivid", img: "vividIGlogoSmaller.png",},
    {name: "html", img: "html.png",},
    {name: "html", img: "html.png",},
    {name: "soundcloud", img: "soundcloud.png",},
    {name: "soundcloud", img: "soundcloud.png",},
    {name: "github", img: "github.png",},
    {name: "github", img: "github.png",},
];

let messages = document.querySelector(".messages");
let startB = document.querySelector(".startGame")
let start = document.querySelector(".startG")
let game = document.querySelector(".game");
let score = document.querySelector(".score");
let playAgainB = document.querySelector(".playAgain");
let playAgain = document.querySelector(".pAgain");
let guessedG = document.querySelector(".guessed");
let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;

startB.addEventListener("click", function () {
    start.style.display = "none";
    messages.style.display = "grid";
    createBoard(game, cards);
    arrangeCards();
    playAgainB.addEventListener("click", replay);
    imgs = document.querySelectorAll("article .game img");
    Array.from(imgs).forEach(img =>
        img.addEventListener("click", flipCard)
    )
});

function createBoard(board, array) {
    array.forEach((arr, index) => {
        let img = document.createElement("img");
        img.setAttribute("src", "WALLPAPER04.png");
        img.setAttribute("data-id", index);
        board.appendChild(img);
    })
}

function arrangeCards() {
    cards.sort(() => 0.5 - Math.random())
}

function flipCard() {
    let selected = this.dataset.id;
    cardsSelected.push(cards[selected].name);
    cardsId.push(selected);
    this.classList.add("flip");
    this.setAttribute("src", cards[selected].img);
    if (cardsId.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function addGuess(array, index) {
    let img = document.createElement("img");
    img.setAttribute("src", cards[index].img);
    array.appendChild(img);
}

function checkForMatch() {
    let imgs = document.querySelectorAll("article .game img");
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];

    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
        document.getElementById("message").textContent = "you have found a match! +1";
        document.getElementById("message").style.color = "#04E762";
        cardsWon += 1;
        score.innerHTML = cardsWon;
        cardsId.forEach(e => addGuess(guessedG, e));
        imgs[firstCard].style.visibility = "hidden";
        imgs[secondCard].style.visibility = "hidden";
        setTimeout(checkWon, 500)
    } else {
        imgs[firstCard].setAttribute("src", "WALLPAPER04.png");
        imgs[secondCard].setAttribute("src", "WALLPAPER04.png");
        document.getElementById("message").textContent = "wrong, please try again!";
        document.getElementById("message").style.color = "#BA274A";
        imgs[firstCard].classList.remove("flip");
        imgs[secondCard].classList.remove("flip");
    }
    cardsSelected = [];
    cardsId = [];
}

function checkWon() {
    if (cardsWon === cards.length / 2) {
        game.innerHTML = "";
        document.getElementById("message").textContent = "YOU WON!!";
        document.getElementById("message").style.color = "#04E762";
        playAgain.style.display = "flex";
    }
}

function replay() {
    arrangeCards();
    guessedG.innerHTML = "";
    createBoard(game, cards);
    cardsWon = 0;
    score.innerHTML = "0";
    document.getElementById("message").textContent = "Click on a card to flip";
    playAgain.style.display = "none";
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img =>
        img.addEventListener("click", flipCard)
    )
}