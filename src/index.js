import "./style.css";
import { generateHome } from "./home";
import { generateMenu } from "./menu";
import { generateContact } from "./contact";

const div = document.querySelector("#content");
const homeBtn = document.querySelector("#Home");
const menuBtn = document.querySelector("#Menu");
const aboutBtn = document.querySelector("#About");

generateHome();

function switchHomeTab() {
  clearContent();
  generateHome();
}
function switchMenuTab() {
  clearContent();
  generateMenu();
}
function switchAboutTab() {
  clearContent();
  generateContact();
}

// Clear Content
function clearContent() {
  if (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

homeBtn.addEventListener("click", switchHomeTab);
menuBtn.addEventListener("click", switchMenuTab);
aboutBtn.addEventListener("click", switchAboutTab);
