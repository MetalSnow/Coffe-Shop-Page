import Img from "./home.jpg";
export { generateContent };

function generateContent() {
  const div = document.querySelector("#content");
  const h2 = document.createElement("h2");
  const para = document.createElement("p");

  h2.textContent = "Lux Restaurant";
  para.textContent =
    "Welcome to Lux, where healthy meets delicious. Our restaurant issanctuary for those seeking nourishing meals made with love and care.From vibrant salads to hearty grain bowls, each dish is crafted with fresh, locally sourced ingredients to provide a burst of flavor and vitality.";

  const homeImg = new Image();
  homeImg.src = Img;

  div.append(h2, homeImg, para);
}
