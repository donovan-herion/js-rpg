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
    this.maxHealth = 100

    //coup et heal aleatoires

    this.min = 3
    this.maxDamage = 20
    this.maxHealing = 30

    //fonction dommage 

    this.damage = function (adversaire) {
        adversaire.currenthealth -= Math.floor(Math.random() * 30);
    }

    // this.totalDamage = this.damage()

    // this.heal = function () {

    //     let heal1 = document.querySelector("#heal1");
    //     let heal2 = document.querySelector("#heal2");
    // }


    // this.displayChar = function () {
    //     return console.log(`I am a ${this.perso}, I wield a ${this.pouvoir} `)

    // }
}


let objPerso1 = {};
let objPerso2 = {};


//creation des personnages au clic lancer partie et disparition premiere page
let btn = document.getElementById('run')

btn.addEventListener("click", () => {
    let perso1 = document.getElementById("liste-persos1").value;
    let pouvoir1 = document.getElementById("liste-pouvoirs1").value;
    let perso2 = document.getElementById("liste-persos2").value;
    let pouvoir2 = document.getElementById("liste-pouvoirs2").value;

    if (perso1 != "" && pouvoir1 != "" && perso2 != "" && pouvoir2 != "") {
        create()

        let disapear = document.querySelector('.disapear')
        let appear = document.querySelector('.appear')

        disapear.style.display = 'none'
        appear.style.display = 'block'
    }
})



function create() {

    ///recuperation valeur personage+ pouvoir
    let perso1 = document.getElementById("liste-persos1").value;
    let pouvoir1 = document.getElementById("liste-pouvoirs1").value;
    let perso2 = document.getElementById("liste-persos2").value;
    let pouvoir2 = document.getElementById("liste-pouvoirs2").value;

    /// creation personage
    objPerso1 = new Person(perso1, pouvoir1);
    objPerso2 = new Person(perso2, pouvoir2);

    /// recuperation bar de vie HTML
    let bar1 = document.querySelector(".bar1");
    let bar2 = document.querySelector(".bar2");



    ///affichage vie
    bar1.setAttribute("value", objPerso1.currenthealth);
    console.log(objPerso1);
    bar2.setAttribute("value", objPerso2.currenthealth);
    console.log(objPerso2);



}


//dommage au clic

let hit1 = document.querySelector("#hit1");

hit1.addEventListener("click", () => {
    objPerso2.currenthealth -= Math.floor(Math.random() * 20);
    console.log(objPerso2.currenthealth)

    /// recuperation bar de vie HTML
    let bar2 = document.querySelector(".bar2");

    ///affichage vie
    bar2.setAttribute("value", objPerso2.currenthealth);

    console.log(objPerso2);


});


let hit2 = document.querySelector("#hit2");

hit2.addEventListener("click", () => {
    objPerso1.currenthealth -= Math.floor(Math.random() * 20);
    console.log(objPerso1.currenthealth)

    /// recuperation bar de vie HTML
    let bar1 = document.querySelector(".bar1");

    ///affichage vie
    bar1.setAttribute("value", objPerso1.currenthealth);

    console.log(objPerso1);

});

// heal au click

let heal1 = document.querySelector("#heal1");

heal1.addEventListener("click", () => {
    objPerso1.currenthealth += Math.floor(Math.random() * 30);
    console.log(objPerso1.currenthealth)

    /// recuperation bar de vie HTML
    let bar1 = document.querySelector(".bar1");

    ///affichage vie
    bar1.setAttribute("value", objPerso1.currenthealth);



});


let heal2 = document.querySelector("#heal2");

heal2.addEventListener("click", () => {
    objPerso2.currenthealth += Math.floor(Math.random() * 30);
    console.log(objPerso2.currenthealth)

    /// recuperation bar de vie HTML
    let bar2 = document.querySelector(".bar2");

    ///affichage vie
    bar2.setAttribute("value", objPerso2.currenthealth);

 

});


//fonction partir comme un lache

let leaveBtn = document.querySelectorAll(".leave")

for (let i = 0; i < leaveBtn.length; i++) {
    leaveBtn[i].addEventListener("click", () => {
        alert(`player ${i + 1} leaves the battlefield like a coward`)
        window.location.reload(true);
    })
}


//on recupere les boutons de droite et de gauche

let btn1 = document.querySelectorAll(".btn1");
let btn2 = document.querySelectorAll(".btn2");

//on ecoute les evenements sur les boutons1

for (let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener("click", () => {
        blockLeft()
    })
}

function blockLeft() {
    for (let i = 0; i < btn1.length; i++) {
        btn2[i].removeAttribute("disabled");
        btn2[i].style.opacity = 1;
        btn1[i].setAttribute("disabled", "disabled");
        btn1[i].style.opacity = 0.3;
    }
}

//on ecoute les evenements sur les boutons2

for (let i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener("click", () => {
        blockRight()
    })
}

function blockRight() {
    for (let i = 0; i < btn2.length; i++) {
        btn1[i].removeAttribute("disabled");
        btn1[i].style.opacity = 1;
        btn2[i].setAttribute("disabled", "disabled");
        btn2[i].style.opacity = 0.3;
    }
}


// console.log(perso1);
// console.log(pouvoir1);
// console.log(perso2);
// console.log(pouvoir2);



// changer la bare de vie + % de la vie
//  ->   si mort refreche

// chaque action ecrire dans log-contenaire
// afficher nom du perso + pouvoir
// affi

