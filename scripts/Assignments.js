//imports pets and walkers from arrays in database.js
import { getPets, getWalkers } from "./database.js";

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, walkers) => {
  let petWalker = null;

  for (const walker of walkers) {
    if (walker.id === pet.walkerId) {
      petWalker = walker;
    }
  }

  return petWalker;
};
//exports the function that builds html list for assignments to main.js
export const Assignments = () => {
  let assignmentHTML = "";
  assignmentHTML = "<ul>";

  for (const currentPet of pets) {
    const currentPetWalker = findWalker(currentPet, walkers);
    assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `;
  }

  assignmentHTML += "</ul>";

  return assignmentHTML;
};
