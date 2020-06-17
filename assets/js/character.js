//Character choice picture update

const leftSection = document.querySelector(".left")
const rightSection = document.querySelector(".right")

const chosenCharacter1 = document.getElementById('liste-persos1')
const chosenCharacter2 = document.getElementById('liste-persos2')

chosenCharacter1.addEventListener("change", () => {
    switch (chosenCharacter1.value) {
        case 'Sangoku':
            leftSection.style.backgroundImage = 'url(../assets/images/sangoku.png)'
            break;
        case 'Vegeta':
            leftSection.style.backgroundImage = 'url(../assets/images/vegeta.png)'
            break;
        case 'Picollo':
            leftSection.style.backgroundImage = 'url(../assets/images/picollo.png)'
            break;
        case 'Freezer':
            leftSection.style.backgroundImage = 'url(../assets/images/freezer.png)'
            break;
            
            default:
                leftSection.style.backgroundImage = 'url(../assets/images/wireframe.png)'
                break;
            }
    })

chosenCharacter2.addEventListener("change", () => {
    switch (chosenCharacter2.value) {
        case 'Sangoku':
            rightSection.style.backgroundImage = 'url(../assets/images/sangoku.png)'
            break;
        case 'Vegeta':
            rightSection.style.backgroundImage = 'url(../assets/images/vegeta.png)'
            break;
        case 'Picollo':
            rightSection.style.backgroundImage = 'url(../assets/images/picollo.png)'
            break;
        case 'Freezer':
            rightSection.style.backgroundImage = 'url(../assets/images/freezer.png)'
            break;
            
            default:
                rightSection.style.backgroundImage = 'url(../assets/images/wireframe.png)'
                break;
            }
    })



//Use this script to generate your character
function Person(heroes, power) {
    this.heroes = heroes;
    this.power = power;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function () { };

    this.damage = function () { };

    this.totalDamage = this.damage();

    this.displayChar = function () {
        return console.log(`I am a ${this.heroes}, I wield a ${this.power}, my total health point are ${this.maxHealth}`);
    };
}
console.log(Person);

// (() => {

//     class Personage {
//         constructor(firstname){
//             this.firstname = firstname;
        
//         }
    
//         set name(text){
//             let arr_nam = text.split(" ");
//             this.firstname = arr_nam[0];
           
//         }
//         get name(){
//             return `${this.firstname} `;
//         }
//     }
   
//         let goku = new Personage("Goku")
       
//         console.log(goku.name);
    
//         goku.name = "Songoku";
//         console.log(goku.name);
   
    
//     })();



//     const perso = {
//         set current(name) {
//           this.log.push(name);
//         },
//         log: []
//       };
      
//       perso.current = 'Songoku';
//       perso.current = 'Vegeta';
//       perso.current = 'Frezzer';
//       perso.current = 'Picoolo';
      
//       console.log(perso.log);
     