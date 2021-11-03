import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const showRequests = (request) => {
    return `<li> ${request.parentName}
<button class="request__delete"
id="request--${request.id}">
Deny
</button>
</li>`

}

export const Requests = () => {
    const requests = getRequests()
    
    let html = `<ul>
    ${requests.map(showRequests).join("")
}
</ul>`

return html
}