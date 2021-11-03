import { sendRequest } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => { // adding a clickable event that will 
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userAttendance = document.querySelector("input[name='attendance']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const length = document.querySelector("input[name='serviceLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            address: userAddress,
            attendance: userAttendance,
            dateOfReservation: userDate,
            lengthOfReservation: length
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const reservationForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendance">Attendance</label>
            <input type="number" name="attendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date of Reservation</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceLength">Length of Reservation</label>
            <input type="text" name="serviceLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}