
document.getElementById("run").addEventListener("click", CreateChooseStart);
///choix du Heroes et de son pouvoir
function CreateChooseStart() {
fighter1Heroes = document.getElementById("liste-persos1").value;
fighter1Power = document.getElementById("liste-pouvoirs1").value;
fighter2Heroes = document.getElementById("liste-persos2").value;
fighter2Power = document.getElementById("liste-pouvoirs2").value;

    console.log(fighter1Heroes);
    console.log(fighter1Power);
    console.log(fighter2Heroes);
    console.log(fighter2Power);
}


////document.getElementById("run").addEventListener("click", CreateChooseFighting);  
///a changer le lien .   C'est pour la phase combat
function CreateChooseFighting(){

    Heroes1Coup = document.getElementById("Coup1").value;
    Heroes1Soins = document.getElementById("Soins1").value;
    Heroes1Part = document.getElementById("Part1").value;

    Heroes2Coup = document.getElementById("Coup2").value;
    Heroes2Soins = document.getElementById("Soins2").value;
    Heroes2Part = document.getElementById("Part2").value;


}