let notificationInterval;
const url = "https://www.ejemplo.com"; // Cambia esto por el enlace deseado

function notifyUser() {
  if (!("Notification" in window)) {
    alert("Tu navegador no soporta notificaciones.");
    return;
  }

  if (Notification.permission === "granted") {
    showNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        showNotification();
      }
    });
  }
}

function showNotification() {
  const notification = new Notification("Recordatorio", {
    body: "Haz clic aquí para visitar el enlace.",
    icon: "https://via.placeholder.com/100",
  });

  notification.onclick = () => {
    window.open(url, "_blank");
    clearInterval(notificationInterval);
    notification.close();
  };

  setTimeout(() => notification.close(), 1000);
}

// Iniciar las notificaciones cada 30 segundos
notificationInterval = setInterval(notifyUser, 30000);

// Iniciar la primera notificación inmediatamente
notifyUser();
