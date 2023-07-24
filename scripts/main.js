// Random guardian text color

const randomGuardianText = document.getElementById("randomGuardianClass");
const guardianClassesArray = [
  "gradient-text--solar",
  "gradient-text--void",
  "gradient-text--arc",
  "gradient-text--stasis",
  "gradient-text--strand",
];

// Select a random number between 1 and 3
const randomIndexClass = Math.floor(
  Math.random() * guardianClassesArray.length
);

randomGuardianText.classList.add(guardianClassesArray[randomIndexClass]);

// Random joke below the greetings

const jokeQuote = document.getElementById("jokeQuote");
const jokeQuoteArray = [
  "Days since the last Telesto bug: 0",
  '"A good hunter never dies" - Cayde-6',
  "The current meta is: [Insert shitty weapon]",
  "Doritos vs Cheetos Balls 2",
  "Remember, Osiris is bald",
  '"Holy shit, the game is worse than before" - Average Destiny player',
  "Ikora... Who is that?",
  "An MIT investigation indicates that the titans have Crayola as their favorite company",
  "I hate Destiny 2, it's my favorite game",
  "Fun fact: Ikora has the longest haircut out the 3 vanguards",
  "Somehow Warframe is better",
  "Rat King Enjoyer",
  "Where is tangled shore?",
  '"I\'m ordering Domino\'s" - Zavala',
  '"Why Don\'t You Discover Some Bitches?" - Xivu Arath',
  '"The Light lives in all places, in all things. You can block it, even try to trap it, but the Light will find its way." - The Speaker',
  'Why is Slone more import than Ikora?',
  'Radial Mast: 1 - Rohan: 0',
  'Crow has no bitches',
  'Cayde-6 has joined the party',
];

const randomIndexQuote = Math.floor(Math.random() * jokeQuoteArray.length);
jokeQuote.textContent = `${jokeQuoteArray[randomIndexQuote]}`;
