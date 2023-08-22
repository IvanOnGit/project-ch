// DOM y Eventos
document.addEventListener("DOMContentLoaded", async () => {
  await renderReservations();
});

// async await 
async function renderReservations() {
  try {
    const response = await fetch("./js/reservations.json");
    const reservations = await response.json();
    
    console.log({ reservations });

    const reservationsContainer = document.getElementById("reservationsContainer");

    let reservationElement = "";
    reservations.forEach(reservation => {
      reservationElement +=
      `
        <div class="pindonga">
          <strong>${reservation.name}:</strong> ${reservation.room}
        </div>
      `;
    });

    reservationsContainer.innerHTML = reservationElement;

  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
}
