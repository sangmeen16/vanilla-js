const bd = document.querySelector("body");
const title = document.querySelector(".bd .hello h1");

const superEventHandler = {
  handleTitleClick1: function () {
    const currentColor = title.style.color;
    let newColor;

    if (currentColor === "tomato") {
      newColor = "cornflowerblue";
    } else {
      newColor = "tomato";
    }
    title.style.color = newColor;
  },

  handleTitleClick2: function () {
    const clickedClass = "clicked";
    if (title.className === clickedClass) {
      title.className = "";
    } else {
      title.className = clickedClass;
    }
  },

  handleTitleClick3: function () {
    const clickedClass = "clicked";
    if (title.classList.contains(clickedClass)) {
      title.classList.remove(clickedClass);
    } else {
      title.classList.add(clickedClass);
    }
  },

  handleTitleClick4: function () {
    title.classList.toggle("clicked");
  },

  handleResize: function () {
    const size = window.innerWidth;

    if (size >= 1200) {
      bd.style.backgroundColor = "orange";
    } else if (size < 1200 && size > 900) {
      bd.style.backgroundColor = "purple";
    } else {
      bd.style.backgroundColor = "deepskyblue";
    }
  },

  handleMouseEnter: function () {
    title.innerText = "Mouse is here!";
  },

  handleMouseLeave: function () {
    title.innerText = "Mouse is leave!";
  },
};

window.addEventListener("resize", superEventHandler.handleResize);

// title.addEventListener("click", handleTitleClick1);
//
// title.addEventListener("click", handleTitleClick3);
title.addEventListener("click", superEventHandler.handleTitleClick4);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
