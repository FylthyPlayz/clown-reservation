import { Requests } from "./requests.js"
import { reservationForm } from "./reservationform.js"

export const parties = () => {
    return `
    <h1>Button's and Lollipop's Go Down to ClownTown Service</h1>
    <section class="serviceForm">
    ${reservationForm()}
    </section>
    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `
}