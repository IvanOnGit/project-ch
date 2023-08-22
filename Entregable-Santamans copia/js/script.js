document.addEventListener("DOMContentLoaded", () => {
  const bookButton = document.getElementById("bookButton");
  bookButton.addEventListener("click", showReservationDetails);

  const fetchPostsButton = document.getElementById("fetchPostsButton");
  fetchPostsButton.addEventListener("click", fetchPosts);

  const fetchPostDetailsButton = document.getElementById("fetchPostDetailsButton");
  fetchPostDetailsButton.addEventListener("click", fetchPostDetails);
});

async function showReservationDetails() {
  let name = prompt("Tell us your name");
  let paymentMethod = prompt("Are you going to pay with cash or credit?");
  let suiteNumber;

  // ... tu lógica existente para asignar suites ...

  if (name === "Iván Azariel Santamans") {
    suiteNumber = "the Penthouse";
    alert("Welcome, your suite is " + suiteNumber);
  } else {
    let showAlerts = true;

    for (let i = 0; showAlerts; i++) {
      let randomSuiteNumber = Math.floor(Math.random() * 201);

      if (randomSuiteNumber !== suiteNumber) {
        suiteNumber = randomSuiteNumber;
        alert("Welcome, your suite is " + suiteNumber);
      }

      let response = confirm("Would you rather like another suite?");
      if (!response) {
        showAlerts = false;
      }
    }
  }
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    
    // Puedes trabajar con los datos obtenidos aquí
    console.log(posts);

    // Por ejemplo, mostrar las publicaciones en la página
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.textContent = post.title;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function fetchPostDetails() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await response.json();
    
    // Puedes trabajar con los detalles de la publicación aquí
    console.log(post);

    // Por ejemplo, mostrar los detalles en la página
    const postDetailsContainer = document.getElementById("postDetailsContainer");
    postDetailsContainer.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
  } catch (error) {
    console.error("Error fetching post details:", error);
  }
}