//imports list of walkers array from database.js
import { getWalkers, getCities } from "./database.js";

//added first event listener, on click event it shows the city that the walker services in an alert box
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("walker")) {
    const [, walkerId] = itemClicked.id.split("--");
    const clickedWalker = walkers.find(
      (walker) => walker.id === parseInt(walkerId)
    );
    const clickedCity = cities.find(
      (walker) => walker.id === clickedWalker.cityId
    );
    window.alert(
      `${clickedWalker.name} services the city of ${clickedCity.name}`
    );
  }
});

const walkers = getWalkers();
const cities = getCities();

//exports function that builds html for a list of walker names to main.js
export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
  }

  walkerHTML += "</ul>";
  return walkerHTML;
};
