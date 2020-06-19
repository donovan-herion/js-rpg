let objPerso1 = {};
let objPerso2 = {};

//creation des personnages au clic lancer partie et disparition premiere page
let btn = document.getElementById('run')

btn.addEventListener("click", () => {
    let perso1 = document.getElementById("liste-persos1").value;
    let pouvoirPerso1 = document.getElementById("liste-pouvoirs1").value;
    let perso2 = document.getElementById("liste-persos2").value;
    let pouvoirPerso2 = document.getElementById("liste-pouvoirs2").value;

    if (perso1 != "" && pouvoirPerso1 != "" && perso2 != "" && pouvoirPerso2 != "") {
        create()

        let disapear = document.querySelector('.disapear')
        let appear = document.querySelector('.appear')

        disapear.style.display = 'none'
        appear.style.display = 'block'
    } else {
        alert('Selectionnez un personnage et un pouvoir')
    }
})


let perso1
let pouvoirPerso1
let perso2
let pouvoirPerso2

let BonusAttaqueJoueur1
let BonusAttaqueJoueur2
let BonusDefenseJoueur1
let BonusDefenseJoueur2

function create() {

    ///recuperation valeur personage+ pouvoir
    perso1 = document.getElementById("liste-persos1").value;
    pouvoirPerso1 = document.getElementById("liste-pouvoirs1").value;
    perso2 = document.getElementById("liste-persos2").value;
    pouvoirPerso2 = document.getElementById("liste-pouvoirs2").value;

    /// creation personage
    objPerso1 = new Person(perso1, pouvoirPerso1);
    objPerso2 = new Person(perso2, pouvoirPerso2);

    /// recuperation bar de vie HTML
    let bar1 = document.querySelector(".bar1");
    let bar2 = document.querySelector(".bar2");

    ///affichage vie
    bar1.setAttribute("value", objPerso1.perso[perso1].currenthealth);
    bar2.setAttribute("value", objPerso2.perso[perso2].currenthealth);

    //attribuer les bonus de pouvoir a chaque joueur

    if (pouvoirPerso1 == 'BoostAttaque') {
        BonusAttaqueJoueur1 = 5
        BonusDefenseJoueur1 = 0
    } else if (pouvoirPerso1 == 'BoostVie') {
        BonusDefenseJoueur1 = 5
        BonusAttaqueJoueur1 = 0
    } else if (pouvoirPerso1 = 'Aleatoire') {
        BonusAttaqueJoueur1 = Math.floor(Math.random()*5)
        BonusDefenseJoueur1 = Math.floor(Math.random()*5)
    }

    if (pouvoirPerso2 == 'BoostAttaque') {
        BonusAttaqueJoueur2 = 5
        BonusDefenseJoueur2 = 0
    } else if (pouvoirPerso2 == 'BoostVie') {
        BonusDefenseJoueur2 = 5
        BonusAttaqueJoueur2 = 0
    } else if (pouvoirPerso2 = 'Aleatoire') {
        BonusAttaqueJoueur2 = Math.floor(Math.random()*5)
        BonusDefenseJoueur2 = Math.floor(Math.random()*5)
    }
}


//Dommage au clic

let previous
let hit1 = document.querySelector("#hit1");

hit1.addEventListener("click", () => {
    previous = objPerso2.perso[perso2].currenthealth
    if (perso1 == "Sangoku") {
        objPerso2.perso[perso2].currenthealth -= Math.floor(Math.random() * 20) + BonusAttaqueJoueur1;
        console.log("Vie perso 2 =" + objPerso2.perso[perso2].currenthealth + "sangoku attaque perso 2")
    } else if (perso1 == "Vegeta") {
        objPerso2.perso[perso2].currenthealth -= Math.floor(Math.random() * 22) + BonusAttaqueJoueur1;
        console.log("Vie perso 2 =" + objPerso2.perso[perso2].currenthealth + "Vegeta attaque perso 2")
    } else if (perso1 == "Picollo") {
        objPerso2.perso[perso2].currenthealth -= Math.floor(Math.random() * 24) + BonusAttaqueJoueur1;
        console.log("Vie perso 2 =" + objPerso2.perso[perso2].currenthealth + "Picollo attaque perso 2")
    } else if (perso1 == "Freezer") {
        objPerso2.perso[perso2].currenthealth -= Math.floor(Math.random() * 26) + BonusAttaqueJoueur1;
        console.log("Vie perso 2 =" + objPerso2.perso[perso2].currenthealth + "Freezer attaque perso 2")
    }

    /// recuperation bar de vie HTML
    let bar2 = document.querySelector(".bar2");

    ///affichage vie
    bar2.setAttribute("value", objPerso2.perso[perso2].currenthealth);

    //Game over
    if (objPerso2.perso[perso2].currenthealth <= 0) {
        console.log(objPerso2);
        alert("Game Over! " + perso1 + " gagne la partie!")
        window.location.reload(true);
    }
});


let hit2 = document.querySelector("#hit2");

hit2.addEventListener("click", () => {
    previous = objPerso1.perso[perso1].currenthealth
    if (perso2 == "Sangoku") {
        objPerso1.perso[perso1].currenthealth -= Math.floor(Math.random() * 20) + BonusAttaqueJoueur2;
        console.log("Vie perso 1 =" + objPerso1.perso[perso1].currenthealth + "Sangoku attaque perso 1")
    } else if (perso2 == "Vegeta") {
        objPerso1.perso[perso1].currenthealth -= Math.floor(Math.random() * 22) + BonusAttaqueJoueur2;
        console.log("Vie perso 1 =" + objPerso1.perso[perso1].currenthealth + "Vegeta attaque perso 1")
    } else if (perso2 == "Picollo") {
        objPerso1.perso[perso1].currenthealth -= Math.floor(Math.random() * 24) + BonusAttaqueJoueur2;
        console.log("Vie perso 1 =" + objPerso1.perso[perso1].currenthealth + "Picollo attaque perso 1")
    } else if (perso2 == "Freezer") {
        objPerso1.perso[perso1].currenthealth -= Math.floor(Math.random() * 26) + BonusAttaqueJoueur2;
        console.log("Vie perso 1 =" + objPerso1.perso[perso1].currenthealth + "Freezer attaque perso 1")
    }

    /// recuperation bar de vie HTML
    let bar1 = document.querySelector(".bar1");

    ///affichage vie
    bar1.setAttribute("value", objPerso1.perso[perso1].currenthealth);

    if (objPerso1.perso[perso1].currenthealth <= 0) {
        alert("Game Over! " + perso2 + " gagne la partie!")
        window.location.reload(true);
    }

    if (objPerso1.perso[perso1].currenthealth <= 70) {

    }
});

// heal au click

let heal1 = document.querySelector("#heal1");

heal1.addEventListener("click", () => {
    previous = objPerso1.perso[perso1].currenthealth
    objPerso1.perso[perso1].currenthealth += Math.floor(Math.random() * 30) + BonusDefenseJoueur1  
    //je rajoute 5 a la main et je reduis le random a 25 car si le joueur 2 choisi la vie je pourrais potentiellement me retaper de -5

    /// recuperation bar de vie HTML
    let bar1 = document.querySelector(".bar1");

    ///affichage vie
    bar1.setAttribute("value", objPerso1.perso[perso1].currenthealth);

    if (objPerso1.perso[perso1].currenthealth >= 100) {
        objPerso1.perso[perso1].currenthealth = 100;
    }
});


let heal2 = document.querySelector("#heal2");

heal2.addEventListener("click", () => {
    previous = objPerso2.perso[perso2].currenthealth
    objPerso2.perso[perso2].currenthealth += Math.floor(Math.random() * 30) + BonusDefenseJoueur2
    //je rajoute 5 a la main et je reduis le random a 25 car si le joueur 1 choisi la vie je pourrais potentiellement me retaper de -5
    /// recuperation bar de vie HTML
    let bar2 = document.querySelector(".bar2");

    ///affichage vie
    bar2.setAttribute("value", objPerso2.perso[perso2].currenthealth);

    if (objPerso2.perso[perso2].currenthealth >= 100) {
        objPerso2.perso[perso2].currenthealth = 100;
        console.log(objPerso2.perso[perso2].currenthealth + "joueur 2")

    } 



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

//Evenements sur les boutons1

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

//Evenements sur les boutons2

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


//Log
let hitBtn1 = document.querySelector("#hit1");
let hitBtn2 = document.querySelector("#hit2");
let healBtn1 = document.querySelector("#heal1");
let healBtn2 = document.querySelector("#heal2");

console.log(hitBtn1)
console.log(hitBtn2)
console.log(healBtn1)
console.log(healBtn2)

let logContainer = document.querySelector(".log-container")

hitBtn1.addEventListener("click", () => {

    let p = document.createElement("p");
    p.innerHTML = `${perso1} inflige ${previous - objPerso2.perso[perso2].currenthealth} points de degats a ${perso2}`;
    logContainer.prepend(p);
})

hitBtn2.addEventListener("click", () => {
    
    let p = document.createElement("p");
    p.innerHTML = `${perso2} inflige  ${previous - objPerso1.perso[perso1].currenthealth} points de degats a ${perso1}`;
    logContainer.prepend(p);
})


healBtn1.addEventListener("click", () => {
    let p = document.createElement("p");
    p.innerHTML = `${perso1} se regenere de ${objPerso1.perso[perso1].currenthealth - previous}  points`;
    logContainer.prepend(p);
})

healBtn2.addEventListener("click", () => {
    let p = document.createElement("p");
    p.innerHTML = `${perso2} se regenere de ${objPerso2.perso[perso2].currenthealth - previous}  points`;
    logContainer.prepend(p);
})
