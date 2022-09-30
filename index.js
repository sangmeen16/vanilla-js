const bd = document.querySelector("body");

function handleResize() {
  const size = window.innerWidth;
  if (size >= 1200) {
    bd.style.backgroundColor = "orange";
  } else if (size < 1200 && size > 900) {
    bd.style.backgroundColor = "purple";
  } else {
    bd.style.backgroundColor = "deepskyblue";
  }
}

window.addEventListener("resize", handleResize);
