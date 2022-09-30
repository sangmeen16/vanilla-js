const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "Mouse is here!";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "Mouse is gone!";
    title.style.color = colors[1];
  },
  handleResize: function () {
    title.innerText = "You just resized";
    title.style.color = colors[2];
  },
  handleContextMenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
