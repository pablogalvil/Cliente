//Solo me funciona si uso la extension live server para probarlo
let notificationInterval;
const url = "https://www.ejemplo.com";

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

  setTimeout(() => notification.close(), 30000);
}

notificationInterval = setInterval(notifyUser, 30000);

notifyUser();
