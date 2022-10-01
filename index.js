const bd = document.querySelector("body");
const title = document.querySelector(".bd .hello h1");

function handleTitleClick1() {
  const currentColor = title.style.color;
  let newColor;

  if (currentColor === "tomato") {
    newColor = "cornflowerblue";
  } else {
    newColor = "tomato";
  }
  title.style.color = newColor;
}

function handleTitleClick2() {
  const clickedClass = "clicked";
  if (title.className === clickedClass) {
    title.className = "";
  } else {
    title.className = clickedClass;
  }
}

function handleTitleClick3() {
  const clickedClass = "clicked";
  if (title.classList.contains(clickedClass)) {
    title.classList.remove(clickedClass);
  } else {
    title.classList.add(clickedClass);
  }
}

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

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is leave!";
}

window.addEventListener("resize", handleResize);

// title.addEventListener("click", handleTitleClick1);
//
title.addEventListener("click", handleTitleClick3);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
