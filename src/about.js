const container = document.querySelector("#container");

export function aboutInfo() {
  const aboutTab = document.createElement("div");
  aboutTab.id = "aboutTab";
  aboutTab.setAttribute("data-tab-content", "");

  const aboutCard = document.createElement("div");
  aboutCard.id = "about-card";

  const aboutHeader = document.createElement("h2");
  aboutHeader.id = "about-header";
  aboutHeader.textContent = "About Us";

  const aboutText = document.createElement("p");
  aboutText.id = "about-text";
  aboutText.textContent =
    "At The Ice Cream Bar, we believe that every scoop tells a story. Founded in 2024, our mission is to bring joy through handcrafted, premium-quality ice cream made from the finest ingredients.";

  aboutCard.appendChild(aboutHeader);
  aboutCard.appendChild(aboutText);
  aboutTab.appendChild(aboutCard);
  container.appendChild(aboutTab);
}
