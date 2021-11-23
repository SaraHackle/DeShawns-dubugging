//imports list of walkers array from database.js
import { getWalkers } from "./database.js"

const walkers = getWalkers()

//exports function that builds html for a list of walker names to main.js
export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

