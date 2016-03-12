// Create an array of objects that represents famous people (see structure below).
"use strict";
let output = document.getElementById("pirates");
let card = document.getElementsByClassName("card");
let bio = document.getElementsByClassName("bio");
let people = [{
  title:  "Captain",
  name:  "William Kidd",
  bio: "A stylish Scotsman who had been a leading citizen of New York City, actively involved in the building of Trinity Church, Captain Kidd began his career as a privateer, originally commissioned to rid the seas of pirates. Only reluctantly, did he cross bounds into piracy (having been elected pirate captain by his crew), although his piracy itself may be questionable as his exploits may have been sensationalized. His greatest misfortune was attacking an East India Company vessel. When he learned that he was hunted for that deed, he buried some of his treasure on Gardiners Island, anticipating its usefulness as a bargaining tool. But, captured in Boston along with his wife, William Kidd was eventually sent to England for trial. He was sentenced to death, some said unjustly, and suffered a wretched execution - the noose by which he was hung broke twice, and after he was killed on the third hanging his body was doused in tar and hung by chains along the Thames River. ",
  image: "images/kidd.jpg",
  lifespan:  {
    birth: 1645,
    death: 1701
  }
},
{
  title:  "Captain",
  name:  "Edward 'Blackbeard' Teach",
  bio: "Though there have been more successful pirates, Blackbeard is one of the best-known and widely-feared of his time. He commanded four ships and had a pirate army of 300 at the height of his career, and defeated the famous warship, HMS “Scarborough” in sea-battle. He was known for barreling into battle clutching two swords, with several knives and pistols at the ready. He captured over forty merchant ships in the Caribbean, and without flinching killed many prisoners. Though he had many unofficial wives, he was “officially” married to a 16 year old girl - whom legend has it he offered as a gift to his crew after she tried to reform him. After a fierce battle in which he made a stand with candle smoke rising from his beard, he was overtaken by the Royal Navy and beheaded. His head was then raised upon a stake as a warning to other pirates near Virginia’s Hampton River.",
  image: " images/blackbeard.jpg",
  lifespan:  {
    birth: 1680,
    death: 1718
  }
},
{
  title:  "Captain",
  name:  "Bartholomew 'Black Bart' Roberts",
  bio: "Roberts’ crew admired his adventurist courage, calling him “pistol proof” - though he had been forced into piracy, having once been an officer on board a ship that was captured by the pirate Howell Davis. After taking over, Roberts’ navigational skills, charisma, and bravado painted him golden the eyes of his men. He plundered over 400 ships, a grandiose record to be sure, and captained well-armored ships in every endeavor. He died in a vigorous battle against British Captain Chaloner Ogle; his death left many of his faithful followers and admirers reeling. Even the Royal Navy itself was stunned.",
  image: "images/Black_Bart.jpg",
  lifespan:  {
    birth: 1682,
    death: 1722
  }
},
{
  title:  "Captain",
  name:  "Henry 'Long Ben' Every",
  bio: "Every began his naval career in the British Royal Navy. He served on various ships before he joined a venture known as the Spanish Expedition Shipping in 1693. He became pirate captain through mutiny, leading to his renown as one of the most feared and successful pirates of the Red Sea. Though he didn’t take many ships, the two that he did capture were among the finest in the Indian Ocean (one of them being India’s treasure ship, bulging with gold and jewels). Upon his great wealth (he was the richest pirate in the world), Every retired - but he continued to be hunted far and wide, and his true whereabouts at the time of his death remain unknown.",
  image: " images/henry_every_pirate.jpg",
  lifespan:  {
    birth: 1653,
    death: "Unknown"
  }
},
{
  title:  "Pirate",
  name:  "Anne Bonny",
  bio: "Having traveled to the New World with her family, Anne fell in love and married a poor sailor named James Bonny. But when she grew increasingly disappointed by her husband’s lack of valor, she began seeking out the company of many different men in Nassau. Among these men, was “Calico Jack” Rackham, captain of a pirate ship. She joined his crew whilst acting and dressing like a man (including drinking and fighting profusely). Thus, she fought under his command, and along with fellow female pirate Mary Read, she coaxed the crew onto even greater bloodshed and violence and became a formidable pirate herself. However, she was captured with Rackham’s crew and sentenced to death. Both she and Mary Read claimed pregnancy in prison, and their death sentences weren’t carried out (but Mary had the misfortune of dying in prison). No one is sure how the famous female pirate died, though there is speculation that she returned home to her husband or her father.",
  image: "images/anne_bonny.jpg",
  lifespan:  {
    birth: 1700,
    death: 1782
  }
},
{
  title:  "Captain",
  name:  "Sir Henry Morgan",
  bio: "Captain Morgan is one of the most famous pirates who terrorized Spain’s Caribbean colonies in the late 1600s. Inconspicuously sanctioned by England, Morgan became the head of the Jamaican fleet and successfully undermined Spanish rule, hampering normalcy in the West Indies. He may have pillaged upwards of four hundred ships throughout his piracy career. His greatest achievement was capturing the very wealthy Panama City with thirty ships and 1,200 men, acquiring his largest plunder yet. It was due to his raid on Panama City that he was arrested and brought back to England, but because battle resumed between England and Spain, King Charles II knighted Morgan and released him as deputy governor of Jamaica. There, he lived a very well respected planter until his death.",
  image: "images/Henry_Morgan.gif",
  lifespan:  {
    birth: 1635,
    death: 1688
  }
}]
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
function populateDom(){
for (let i = 0; i < people.length; i++) {
  let person = people[i];
  buildCard(person); 
  }

addClickEvent();
}

function removeSelected(){
  for(let i = 0; i < card.length; i++){
    card[i].classList.remove("selected")
  }
}

function keyEvent(currCard, currBio){
  userinput.addEventListener("keyup", function(event){
    currBio.innerHTML = userinput.value;
  })
}

function buildCard(person){
  output.innerHTML += `<person class="card"><header>${person.title} ${person.name}</header><section><p class="bio">${person.bio} </p><img src='${person.image}'</section><footer>${person.lifespan.birth} - ${person.lifespan.death}</footer></person>`
      //output.innerHTML += "<br>" + out
};

function addClickEvent(currCard){
  for (let i = 0; i < card.length; i++){
    let currCard = card[i];
    let currBio = bio[i];
    currCard.addEventListener("click", function(){
      removeSelected();
      userinput.focus();
      currCard.classList.add("selected");
      keyEvent(currCard, currBio);
      
  })

  }
}

populateDom();
    
// For every even numbered element, have a light yellow background.

//nth-of-type

// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// 
// function buildBorder(event){
//   person.style.border="2px dotted black"
  
// };
// person.addEventListener("click", buildBorder)
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// 
// function gainFocus(event){
//   getElementById("userinput").focus
// };
// userinput.addEventListener("click")
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// 
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
// 
//userinput.addEventListener(keypress)
// Person element structure

// <!-- person element? what??? -->
// <person>
//   <header>Name and title go here</header>
//   <section>Bio and image go here</section>
//   <footer>Lifespan info goes here</footer>
// </person>
// Object structure

// {
//   title: "Samurai",
//   name: "Tomoe Gozen",
//   bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
//   image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
//   lifespan: {
//     birth: 1747,
//     death: 1797
//   }
// }