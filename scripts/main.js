//imports html lists built in each js file
import { Walkers } from "./Walkers.js";
import { CityList } from "./CityList.js";
import { Assignments } from "./Assignments.js";
import { RegisteredPets } from "./RegisteredPets.js";

//puts html in the DOM where the id is "container"
const mainContainer = document.querySelector("#container");

//html for entire build of application, imports each js files html list
const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${CityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${Walkers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${RegisteredPets()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`;
//adds html structure to the main section of website
mainContainer.innerHTML = applicationHTML;
