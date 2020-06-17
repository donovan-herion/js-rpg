[Link to the site](https://donovan-herion.github.io/js-rpg/)

## The stats

<summary>GAME SETUP</summary>

| **Persos** | Sangoku            | Vegeta             | Piccolo            | Freezer            |
| ---------- | ------------------ | ------------------ | ------------------ | ------------------ |
|            | Att 80% / Def 120% | Att 80% / Def 120% | Att 70% / Def 130% | Att 115% / Def 90% |

<br>

| **Pouvoirs** | Attaque | Défense | Teleportation  | Aleatoire  |
| ------------ | ------- | ------- | -------------- | ---------- |
|              | +20%    | +20%    | 1/3 attaque +- | Att/Def/Tel|

<br>

| **Attaques** | Sangoku    | Vegeta     | Piccolo          | Freezer      |
| ------------ | ---------- | ---------- | ---------------- | ------------ |
|              | Coup       | Coup       | Coup             | Coup         |
|  Aleatoire   | Kamehameha | Kamehameha | Aibimu           | Mafuba       |
|              | Genkidama  | Final Flah | Rayon de la mort | Makankosappo |

<br>

| **Regeneration** | Sangoku | Vegeta | Piccolo | Freezer |
| ---------------- | ------- | ------ | ------- | ------- |
|                  | +10%    | +10%   | +10%    | +10%    |
|    Aleatoire     | +20%    | +20%   | +20%    | +20%    |
|                  | +30%    | +30%   | +30%    | +30%    |

## First step

**Challenge 1:**

Create an HTML page with the following elements included:

- A title.
- An element to display both characters stats (visual, name, item, health...) [Something like a VS screen](https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2050964/910/607/m1/fpnw/wm0/sample8-.jpg?1482262310&s=b524ce6f06ee59486cfa7ffa7a78ad99)
- A panel with 6 buttons, 3 for each player (hit, heal & yield. Those are the moves.)
- A creation panel with inputs & dropdowns to create your character. (For now only name, items and race )
- A log that will tell you which move the player made.

**Challenge 2:**

Use the character.js file and save the inputs inside variables/an object, and use them to initiate new characters for both players.

**Challenge 3:**

Make sure that only the title, VS screen and the input field are visible when creating the characters.

**Challenge 4**

When the characters are created, the creation panel should disappear. After this, the `moves` & `log` panel should appear.

**Challenge 5**

Display the health bar of both players this should work real-time.
Make sure it has a decrease/increase animation
Make use of max-health and currentHealth.

**Challenge 6**

Randomize the healing and attack function.

**Great! Now proceed.**




## Second Step

**Challenge 1:**

Create a js file named `gamelogic.js`. You are in charge of writing the game itself.
Take a look at the `character.js` file you will have to use it.

**Note**: You will have to work with this file as well. Its up to you to find out what belongs where.

**Challenge 2:**

Initiate a temporary character. We will use this to test our game logic.

**Challenge 3:**

Write a function that will handle the races. This will only run once.

**Challenge 4:**

Write a function that will handle the items. This will be called everytime we make a move.

**Challenge 5:**

Make the functions work with the character. See if the stats change on creation.

**Challenge 6:**

Lower the health of your object and create a healing function that will use the `heal` function. (character.js)
Make it so the function uses a random number between the minHealing and maxHealing.

**Note:** The `currentHealth` should **NEVER** go above the `maxHealth`

**Great! Now proceed**

## The Boss

We are almost finished. There are still some things to tackle.

Here is a list of what you should work out:

- Combine the code + html for some 'working result'.
- Inputs should generate the characters stats.
- Work out the attack function (Almost the same as heal but it has to hit the enemy).
- When a player loses, display a victory message & a loose message for each player.
- At the end of the game, you should be able to restart the game to create a new character.

## The final encounter

- Style this arena to your taste.
- Add extra functions. (Keep it appropriate.)
- Prepare to present your work.
