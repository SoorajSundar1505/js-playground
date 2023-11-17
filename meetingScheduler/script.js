// script.js
document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    displayCalendar(currentMonth, currentYear);

    function displayCalendar(month, year) {
        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const monthYearElement = document.getElementById("month-year");
        monthYearElement.textContent = `${getMonthName(month)} ${year}`;

        const daysElement = document.getElementById("days");
        daysElement.innerHTML = "";

        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("day", "empty");
            daysElement.appendChild(emptyDay);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = i;
            dayElement.addEventListener("click", function() {
                openDatePopup(dayElement);
            });
            daysElement.appendChild(dayElement);
        }
    }

    function openDatePopup(dayElement) {
        const datePopup = document.getElementById("datePopup");
        datePopup.style.display = "block";
        const selectedDate = document.getElementById("selectedDate");

        selectedDate.addEventListener("input", function() {
            datePopup.style.display = "none";
            showEventForm(dayElement);
        });
    }

    function openTimePopup() {
        const timePopup = document.getElementById("timePopup");
        timePopup.style.display = "block";
    }

    function scheduleAppointment() {
        const selectedTime = document.getElementById("selectedTime").value;
        if (selectedTime) {
            alert("Appointment scheduled for:\nDate: " + document.getElementById("selectedDate").value + "\nTime: " + selectedTime);
            // You can perform additional actions here, such as sending the data to a server
            // or updating the UI with the scheduled appointment information.
        } else {
            alert("Please select a time.");
        }

        // Close the time popup after scheduling
        const timePopup = document.getElementById("timePopup");
        timePopup.style.display = "none";
    }

    function getMonthName(month) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[month];
    }

    function previousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        displayCalendar(currentMonth, currentYear);
    }

    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        displayCalendar(currentMonth, currentYear);
    }

    function showEventForm(dayElement) {
        const eventForm = document.createElement("div");
        eventForm.classList.add("event");
        eventForm.textContent = "Event";
        dayElement.appendChild(eventForm);
    }
});
