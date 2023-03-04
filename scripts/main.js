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
  "I'm ordering Domino's - Zavala",
  "Why Don't You Discover Some Bitches? - Xivu Arath",
];

const randomIndexQuote = Math.floor(Math.random() * jokeQuoteArray.length);
jokeQuote.textContent = `${jokeQuoteArray[randomIndexQuote]}`;

// Set favicon according the color mode

const usesDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const favicon = document.getElementById("favicon");

function setFavicon(isDarkMode) {
  if (isDarkMode) {
    favicon.href = "./images/favicon-dark-mode.ico";
  } else {
    favicon.href = "./images/favicon-white-mode.ico";
  }
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => setFavicon(event.matches));

setFavicon(usesDarkMode);
