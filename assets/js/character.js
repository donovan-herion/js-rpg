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
