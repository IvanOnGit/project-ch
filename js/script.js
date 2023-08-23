// DOM y Eventos
document.addEventListener("DOMContentLoaded", async () => {
  await renderReservations();
});

// async await 
async function renderReservations() {
  try {
    const response = await fetch("./js/reservations.json");
    const reservations = await response.json();
    const reservationsContainer = document.getElementById("reservationsContainer");

    let reservationElement = "";
    reservations.forEach(reservation => {
      reservationElement +=
      `
        <div class="reservationCard ${reservation.reserved ? "reservedCard" : ""}">
          <div id="reservation:${reservation.id}" class="reserverdOverlay">
            <p>Reserverd</p>
          </div>
          <div class="reservationImageContainer"> 
            <img class="reservationImage" src="./img/${reservation.name}.jpg" alt="Imagen" />
          </div>
          <div class="reservationText">
            <h3>${reservation.name}</h3>
            <p>Central Park, this metropolis will captivate you with its cultural diversity, world-class dining, and endless entertainment options. Seize this unique opportunity to explore bustling streets, stroll a</p> 
            <button onclick="reserveRoom(${reservation.id})" class="reserveButton">Reserve</button>      
          </div>
        </div>
      `;
    });

    reservationsContainer.innerHTML = reservationElement;

  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
}

const reserveRoom = (id) => {
  const reservationElement = document.getElementById(`reservation:${id}`);
  reservationElement.style.display = "block";
}
