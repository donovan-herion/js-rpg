//Character choice picture update

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
                rightSection.style.backgroundImage = 'url(../assets/images/wireframe.png)'
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
                leftSection.style.backgroundImage = 'url(../assets/images/wireframe.png)'
                console.log('worked')

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

let btn = document.getElementById('run')
let disapear = document.querySelector('.disapear')
let appear = document.querySelector('.appear')
btn.addEventListener("click", () => {
    disapear.style.display = 'none'
    appear.style.display = 'block'
})