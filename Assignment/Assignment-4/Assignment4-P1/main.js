const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

randomize.addEventListener('click', result);
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["YapYap THE DESTROYER", "Spartian 117", "Batman" ];
const insertY = ["The Halo Ring", "Super Earth", "The Void"];
const insertZ = ["spontaneously combusted", "got pulled into a black hole ", "got taken by Batman"];

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const ZItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertz:", ZItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature =  `${Math.round((94 - 32) * (5/9))} centigrade`;
    newStory = newStory.replace("300 pounds", weight).replace("94 fahrenhit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

