import { getPets, getWalkers } from "./database.js";

const pets = getPets();
const walkers = getWalkers();

//nested for loop event listener
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pet")) {
//             const [,petId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if (pet.id === parseInt(petId)) {

//                     for (const walker of walkers) {
//                         if (walker.id ===  pet.walkerId) {
//                             window.alert(`${pet.name} is being walked by ${walker.name}`)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// )

//event listener using find
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("pet")) {
    const [, petId] = itemClicked.id.split("--");
    const clickedPet = pets.find((pet) => pet.id === parseInt(petId));
    const clickedWalker = walkers.find(
      (walker) => walker.id === clickedPet.walkerId
    );
    window.alert(`${clickedPet.name} is being walked by ${clickedWalker.name}`);
  }
});

export const RegisteredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};
