export function generateContact() {
  const div = document.querySelector("#content");
  const divContact = document.createElement("div");
  const divH1 = document.createElement("h1");

  divContact.classList.add("contact");
  divH1.classList.add("contactH1");

  divH1.textContent = "Contact Us";

  divContact.appendChild(divH1);

  const contactInfo = [
    {
      name: "Baki",
      position: "Coffee Maker",
      phone: "999-999-111",
    },
    {
      name: "Toji",
      position: "Founder",
      phone: "999-999-111",
    },
    {
      name: "Naruto",
      position: "Delivery Boy",
      phone: "999-999-111",
    },
  ];

  contactInfo.forEach((member) => {
    const memberDiv = document.createElement("div");
    const memberName = document.createElement("h2");
    const memberPosition = document.createElement("h3");
    const memberPhone = document.createElement("h3");

    memberDiv.classList.add("info");
    memberName.classList.add("contact-name");

    memberName.textContent = member.name;
    memberPosition.textContent = member.position;
    memberPhone.textContent = member.phone;

    memberDiv.append(memberName, memberPosition, memberPhone);
    divContact.appendChild(memberDiv);

    div.appendChild(divContact);
  });
}
