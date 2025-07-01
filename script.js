// const ideas = [
//   "Paint something using only 3 colors.",
//   "Write a haiku about your breakfast.",
//   "Take a photo of something ordinary and make it look epic.",
//   "Write a 2-minute monologue for a fictional villain."
// ];

const ctabutton = document.getElementById("button1");
const ideabox = document.getElementById("idea-box");

const Ideas = [
"Paint something using only 3 colors.",
  "Write a haiku about your breakfast.",
  "Take a photo of something ordinary and make it look epic.",
  "Write a 2-minute monologue for a fictional villain."
];

ctabutton.addEventListener("click", () => {

  const randomindex = Math.floor(Math.random() * Ideas.length);
  const randomIdea = Ideas[randomindex];

  ideabox.textContent = randomIdea;

});