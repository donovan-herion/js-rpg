//Character choices and picture update

const leftSection = document.querySelector(".left")
const rightSection = document.querySelector(".right")
const secondLeftSection = document.querySelector(".second-left")
const secondRightSection = document.querySelector(".second-right")

const chosenCharacter1 = document.getElementById('liste-persos1')
const chosenCharacter2 = document.getElementById('liste-persos2')

chosenCharacter1.addEventListener("change", () => {
    switch (chosenCharacter1.value) {
        case 'Sangoku':
            leftSection.style.backgroundImage = 'url(assets/images/sangoku.png)'
            secondLeftSection.style.backgroundImage = 'url(assets/images/sangoku.png)'
            break;
        case 'Vegeta':
            leftSection.style.backgroundImage = 'url(assets/images/vegeta.png)'
            secondLeftSection.style.backgroundImage = 'url(assets/images/vegeta.png)'

            break;
        case 'Picollo':
            leftSection.style.backgroundImage = 'url(assets/images/picollo.png)'
            secondLeftSection.style.backgroundImage = 'url(assets/images/picollo.png)'

            break;
        case 'Freezer':
            leftSection.style.backgroundImage = 'url(assets/images/freezer.png)'
            secondLeftSection.style.backgroundImage = 'url(assets/images/freezer.png)'

            break;

        default:
            leftSection.style.backgroundImage = 'url(assets/images/wireframe.png)'
            break;
    }
})

chosenCharacter2.addEventListener("change", () => {
    switch (chosenCharacter2.value) {
        case 'Sangoku':
            rightSection.style.backgroundImage = 'url(assets/images/sangoku.png)'
            secondRightSection.style.backgroundImage = 'url(assets/images/sangoku.png)'
            break;
        case 'Vegeta':
            rightSection.style.backgroundImage = 'url(assets/images/vegeta.png)'
            secondRightSection.style.backgroundImage = 'url(assets/images/vegeta.png)'
            break;
        case 'Picollo':
            rightSection.style.backgroundImage = 'url(assets/images/picollo.png)'
            secondRightSection.style.backgroundImage = 'url(assets/images/picollo.png)'
            break;
        case 'Freezer':
            rightSection.style.backgroundImage = 'url(assets/images/freezer.png)'
            secondRightSection.style.backgroundImage = 'url(assets/images/freezer.png)'
            break;

        default:
            rightSection.style.backgroundImage = 'url(assets/images/wireframe.png)'
            break;
    }
})


const leftImage = document.querySelector(".image-left")
const rightImage = document.querySelector(".image-right")

const chosenPower1 = document.getElementById('liste-pouvoirs1')
const chosenPower2 = document.getElementById('liste-pouvoirs2')

chosenPower2.addEventListener("change", () => {
    switch (chosenPower2.value) {
        case 'Attaque 120%':
            rightImage.src = 'assets/images/fist.png'
            console.log('worked')
            break;
        case 'Défense 120%':
            rightImage.src = 'assets/images/stop.png'
            console.log('worked')

            break;
        case 'Intouchable 30%':
            rightImage.src = 'assets/images/tele.png'
            console.log('worked')

            break;
        case 'Aleatoire':
            rightImage.src = 'assets/images/questionmark.png'
            console.log('worked')

            break;

        default:
            rightSection.style.backgroundImage = 'none'
            console.log('worked')

            break;
    }
})

chosenPower1.addEventListener("change", () => {
    switch (chosenPower1.value) {
        case 'Attaque 120%':
            leftImage.src = 'assets/images/fist.png'
            console.log('worked')
            break;
        case 'Défense 120%':
            leftImage.src = 'assets/images/stop.png'
            console.log('worked')

            break;
        case 'Intouchable 30%':
            leftImage.src = 'assets/images/tele.png'
            console.log('worked')

            break;
        case 'Aleatoire':
            leftImage.src = 'assets/images/questionmark.png'
            console.log('worked')

            break;

        default:
            leftSection.style.backgroundImage = 'none'
            console.log('worked')

            break;
    }
})

//Log
let actionBtn = document.querySelectorAll(".log");
console.log(actionBtn[1])

let message = ["hit1", "heal1", "hit2", "heal2"]

let logContainer = document.querySelector(".log-container")


for (let i = 0; i < actionBtn.length; i++) {
    actionBtn[i].addEventListener("click", () => {
        let p = document.createElement("p");
        p.innerHTML = `${message[i]} afficher message complet`;
        logContainer.prepend(p);

    })
}

// function displayLog() {
// }
// displayLog()
//Create  
function Person(perso, pouvoir) {


    //personage et pouvoir

    this.perso = perso
    this.pouvoir = pouvoir
    this.currenthealth = 100

    //coup et heal aleatoires

    this.min = 3
    this.maxDamage = 20
    this.maxHealing = 30

    //fonction vie et coup 
    this.heal = function () { }
    this.damage = function () { }
    this.totalDamage = this.damage()

    
    this.displayChar = function () {
        return console.log(`I am a ${this.perso}, I wield a ${this.pouvoir} `)

    }
}
console.log(Person);

let btn = document.getElementById('run')
let disapear = document.querySelector('.disapear')
let appear = document.querySelector('.appear')
btn.addEventListener("click", () => {
    disapear.style.display = 'none'
    appear.style.display = 'block'
})


document.getElementById("run").addEventListener("click", Create);
///choix du Heroes et de son pouvoir
function Create() {
    let perso1 = document.getElementById("liste-persos1").value;
    let pouvoir1 = document.getElementById("liste-pouvoirs1").value;
    let perso2 = document.getElementById("liste-persos2").value;
    let pouvoir2 = document.getElementById("liste-pouvoirs2").value;

    console.log(perso1);
    console.log(pouvoir1);
    console.log(perso2);
    console.log(pouvoir2);

    /// C'est pour la phase combat

    hit1 = document.getElementById("hit1");
    heal1 = document.getElementById("heal1");
    leave1 = document.getElementById("leave1");

    hit2 = document.getElementById("hit2");
    heal2 = document.getElementById("heal2");
    leave2 = document.getElementById("leave2");

}


// fonction{
// prendre la valeur de la vie du personnage;
// si :
//      -hit -> enlever vie a l autre perso;
//     -heal -> regeneration

// }

let leaveBtn = document.querySelectorAll(".leave")


for (let i = 0; i < leaveBtn.length; i++) {
    leaveBtn[i].addEventListener("click", () => {
        alert(`player ${i + 1} leaves the battlefield like a coward`)
        window.location.reload(true);
    })
}


