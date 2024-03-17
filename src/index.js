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
  div.innerHTML = "";
  generateHome();
}
function switchMenuTab() {
  div.innerHTML = "";
  generateMenu();
}
function switchAboutTab() {
  div.innerHTML = "";
  generateContact();
}

homeBtn.addEventListener("click", switchHomeTab);
menuBtn.addEventListener("click", switchMenuTab);
aboutBtn.addEventListener("click", switchAboutTab);
