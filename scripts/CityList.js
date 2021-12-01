//imports walker objects from array in database
import { getWalkers, getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

//exports functions the builds the html list of cities from properties of walkers to main.js
export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const city of cities) {
    citiesHTML += `<li "id= city--${city.id}">${city.name}</li>`;
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};
