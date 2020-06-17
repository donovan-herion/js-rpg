
document.getElementById("run").addEventListener("click", Create);
///choix du Heroes et de son pouvoir
function Create() {
    let fighter1Heroes = document.getElementById("liste-persos1").value;
    let fighter1Power = document.getElementById("liste-pouvoirs1").value;
    let fighter2Heroes = document.getElementById("liste-persos2").value;
    let fighter2Power = document.getElementById("liste-pouvoirs2").value;

    console.log(fighter1Heroes);
    console.log(fighter1Power);
    console.log(fighter2Heroes);
    console.log(fighter2Power);

    /// C'est pour la phase combat

    Heroes1Coup = document.getElementById("Coup1").value;
    Heroes1Soins = document.getElementById("Soins1").value;
    Heroes1Part = document.getElementById("Part1").value;

    Heroes2Coup = document.getElementById("Coup2").value;
    Heroes2Soins = document.getElementById("Soins2").value;
    Heroes2Part = document.getElementById("Part2").value;

    // creation du heros et du pouvoir + preparation au combat
    fighter1 = new Person(fighter1Heroes, fighter1Power);
    fighter2 = new Person(fighter2Heroes, fighter2Power);
    document.getElementById("fighter01-Heroes").innerHTML += fighter1Heroes;
    document.getElementById("fighter01-Power").innerHTML += fighter1Power;
    document.getElementById("fighter02-Heroes").innerHTML += fighter2Race;
    document.getElementById("fighter02-Power").innerHTML += fighter2Heroes;





}




