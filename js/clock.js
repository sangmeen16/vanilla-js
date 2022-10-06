const clock = document.querySelector("h2");

function getClock() {
  const christmas = new Date("2022-12-25");
  const today = new Date();
  const diff = christmas - today;

  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  clock.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

getClock();
setInterval(getClock, 1000);
