import Img from "./imgs/coffee-machine.jpg";
import Icon from "./imgs/coffe-icon.png";
export { generateContent };

function generateContent() {
  const div = document.querySelector("#content");
  const home = document.createElement("div");
  const h2 = document.createElement("h2");
  const para = document.createElement("p");

  home.classList.add("home");
  h2.textContent = "Lux Coffee";
  para.textContent =
    "Welcome to Lux Coffee! Discover the world of premium, freshly roasted coffee beans from across the globe. From rich espressos to creamy lattes, we've got your perfect cup waiting. Join us in savoring the luxury of coffee at Lux Coffee.";

  const homeImg = new Image();
  homeImg.src = Img;
  const homeIcon = new Image();
  homeIcon.src = Icon;

  homeIcon.classList.add("coffe-machine");
  homeIcon.classList.add("cup");

  h2.appendChild(homeIcon);
  home.append(h2, homeImg, para);
  div.appendChild(home);
}
