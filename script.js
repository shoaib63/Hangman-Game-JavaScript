let backgroundImg = document.getElementsByTagName("body")[0];
let clickme = document.getElementsByClassName("startBtn")[0];
let menuItem = document.getElementsByClassName("menu");


const secretPhrases = ["never", "you", "that", "bullet", "break"];
let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;


const lettersItem = document.getElementsByClassName("letters");
const letter = document.getElementsByClassName("letter");

console.log(letter.length);

for (let i = 0; i < letter.length; i++) {
        letter[i].addEventListener("click", buttonHandler)
}

window.addEventListener("keydown" , keyHandler);


function selectRandomItem() {
        randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
        console.log(randomItem);
};


function setUnderScores() {
        let splitedWord = randomItem.split("");
        let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"));
        result = mappedWord.join("");
        document.getElementsByClassName("wordSection")[0].innerHTML = `<p>${result}</p>`;
        console.log(result);
}

function checkIflose() {
        if (mistakes === 6) {
                
        }
}


function updateHangmanPicture() {
        const image = document.getElementsByClassName("image")[0];
        if(randomItem === result){
                if(mistakes<=6){
                        image.src = `/Character/win${mistakes}.png`;
                        const win = new Audio("/audio/win.mp3");
                        win.play();
                }
        }else if(mistakes===6){
                image.src = `/Character/${mistakes}.png`;
                const lose = new Audio("/audio/lose.mp3");
                lose.play();
        }else{
                if(mistakes <= 6){
                        image.src = `/Character/${mistakes}.png`;
                }
        }
}

function letterHandler(letter) {
        letter = letter.toLowerCase();
        clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
        if (document.getElementById(letter.toUpperCase()).className !== "used") {
                if (randomItem.indexOf(letter) >= 0) {
                        setUnderScores();
                        // checkIfWon();
                        updateHangmanPicture();
                        const rightClick = new Audio("/audio/right-click.wav");
                        rightClick.play();
                } else if (randomItem.indexOf(letter) == -1) {
                        if(mistakes!== 6){
                                mistakes++;
                        }
                        //checkIflose();
                        const wrongClick = new Audio("/audio/wrong-click.mp3");
                        wrongClick.play();
                        updateHangmanPicture();
                }
        }

        document.getElementById(letter.toUpperCase()).className = "used";

}

function buttonHandler(event) {
        letterHandler(event.target.id);
}

function keyHandler(event) {
        letterHandler(event.key);
}



// Start Game

selectRandomItem();
setUnderScores();






let character = document.getElementsByClassName("characterSection")[0];
const characterTemp = String(`-${character.offsetHeight + 150}px`);
character.style.bottom = characterTemp;


let letterSection = document.getElementsByClassName("letterSection")[0];
const letterSectionsTemp = String(`-${letterSection.offsetHeight + 150}px`);
letterSection.style.top = letterSectionsTemp;

clickme.addEventListener("click", function () {
        var audio = new Audio("/menu/menuPop.mp3");
        audio.play();
        audio.volume = 1;
        const temp = String(`-${menuItem[0].offsetHeight + 150}px`);
        menuItem[0].style.top = temp;
        const startDislay = document.getElementsByClassName("start");
        const opacityAnim = document.getElementsByClassName("start")[0];
        opacityAnim.style.opacity = 0;
        backgroundImg.style.animationName = "backAnimation";
        character.style.display = "flex";
        const lightMusic = new Audio("/menu/lightMusic.mp3");
        lightMusic.play();
        lightMusic.loop = true;
        lightMusic.volume = 1;
        const startDispaly = document.getElementsByClassName("start")[0];
        sleep(600).then(() => {
                startDispaly.style.display = "none";
        })

        sleep(300).then(() => {
                var audio2 = new Audio("/menu/menuPop.mp3");
                audio2.play();
                letterSection.style.top = "0px";
                character.style.bottom = "0px";
                display = "flex";
                const wordSection = document.getElementsByClassName("wordSection")[0];
                wordSection.style.opacity=1;
        })

});


function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
}






// 5 ta audio mikhaim vase error va chek
// va win or lose  va vssshooooo baraie change axe



// khata be khata = khande sheitani