//imports walker objects from array in database
import { getWalkers } from "./database.js";

const walkers = getWalkers();

//exports functions the builds the html list of cities from properties of walkers to main.js
export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const walker of walkers) {
    citiesHTML += `<li>${walker.city}</li>`;
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};
