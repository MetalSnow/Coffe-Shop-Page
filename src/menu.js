export function generateMenu() {
  const div = document.querySelector("#content");
  const divMenu = document.createElement("div");

  divMenu.classList.add("menu");

  const menuItems = [
    {
      name: "Espresso",
      price: "$2.50",
      description:
        "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. It's known for its rich flavor and strong aroma.",
    },
    {
      name: "Cappuccino",
      price: "$3.00",
      description:
        "A classic Italian coffee drink made with equal parts espresso, steamed milk, and milk foam. It's often topped with a sprinkle of cocoa powder or cinnamon.",
    },
    {
      name: "Cold Brew",
      price: "$4.00",
      description:
        "Coffee brewed with cold water over an extended period (usually 12-24 hours), resulting in a smooth, less acidic flavor profile. It's served chilled and can be enjoyed black or with milk and sweetener.",
    },
  ];

  menuItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("h2");
    const itemPrice = document.createElement("span"); // Use span for price to style separately
    const itemDescription = document.createElement("p");

    itemDiv.classList.add("item");
    itemName.classList.add("item-name");
    itemDescription.classList.add("item-desc");

    itemName.textContent = item.name;
    itemPrice.textContent = ` - ${item.price}`; // Add price next to name
    itemDescription.textContent = item.description;

    itemName.appendChild(itemPrice); // Append price to name
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemDescription);
    divMenu.appendChild(itemDiv);
  });

  div.appendChild(divMenu);
}
