//Classe de depart  
function Person(perso, pouvoir) {


    //personage et pouvoir

    this.perso = {
        Sangoku: {
            currenthealth: 100
        },
        Vegeta: {
            currenthealth: 95
        },
        Picollo: {
            currenthealth: 90
        },
        Freezer: {
            currenthealth: 85
        }
    }
    this.pouvoir = {
        BoostAttaque: 'Boost Attaque',
        BoostVie: 'Boost Vie',
        Aleatoire: 'Aleatoire'
    }
}   
    

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
        case 'BoostAttaque':
            rightImage.src = 'https://media.giphy.com/media/kMSyCATSq9SEw/giphy.gif'
            break;
        case 'BoostVie':
            rightImage.src = 'https://media.giphy.com/media/ZOStzpF9H5syI/giphy.gif'

            break;

        case 'Aleatoire':
            rightImage.src = 'https://media.giphy.com/media/hS97mtMUMoKtRwDUNN/giphy.gif'
            break;

        default:
            rightSection.style.backgroundImage = 'none'
            break;
    }
})

chosenPower1.addEventListener("change", () => {
    switch (chosenPower1.value) {
        case 'BoostAttaque':
            leftImage.src = 'https://media.giphy.com/media/kMSyCATSq9SEw/giphy.gif'
            break;
        case 'BoostVie':
            leftImage.src = 'https://media.giphy.com/media/ZOStzpF9H5syI/giphy.gif'

            break;

        case 'Aleatoire':
            leftImage.src = 'https://media.giphy.com/media/hS97mtMUMoKtRwDUNN/giphy.gif'

            break;

        default:
            leftSection.style.backgroundImage = 'none'

            break;
    }
})