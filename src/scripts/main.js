
import { fetchRequests } from "./dataAccess.js"
import { parties } from "./parties.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = parties()
        }
    )
}

render()