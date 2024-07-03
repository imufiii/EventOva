self.addEventListener("notificationclick", (event) => {
  const action = event.action;
  const message =
    action === "agree"
      ? "So we both agree on that!"
      : "Let's agree to disagree.";
  event.waitUntil(
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ action: action });
      });
    })
  );
  event.notification.close();
});
