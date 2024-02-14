let customName = document.getElementById("name");
let button = document.getElementById("button");
let story = document.getElementById("story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return random;
}

let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertx = ["the soup kitchen", "Disneyland", "Father Christmas"];
let inserty = ["Willy the Goblin", "Big Daddy", "the White House"];
let insertz = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

button.addEventListener("click", generateStory);

function generateStory() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);

  newStory = newStory.replaceAll(":insertx:", insertx[xItem]);
  newStory = newStory.replaceAll(":inserty:", insertx[yItem]);
  newStory = newStory.replaceAll(":insertz:", insertx[zItem]);

  if (customName.value !== "") {
    newStory = newStory.replace("Bob", customName.value);
  }
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714286)} stone`;
    const cents = `${Math.round((94 - 32) * (5 / 9))} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", cents);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.innerHTML = newStory;
  story.style.visibility = "visible";
  console.log(newStory);
}
