async function fetchUsers() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("No se pudo obtener la lista de usuarios.");
    }

    const users = await response.json();

    displayUsers(users);
  } catch (error) {
    console.error("Error al cargar los usuarios:", error);
    alert("Hubo un problema al cargar los usuarios.");
  }
}

function displayUsers(users) {
  const userList = document.getElementById("user-list");

  userList.innerHTML = "";

  users.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.classList.add("user");

    userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Compañía: ${user.company.name}</p>
        `;

    userList.appendChild(userItem);
  });
}

document.addEventListener("DOMContentLoaded", fetchUsers);
