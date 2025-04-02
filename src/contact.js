// Content container file
const container = document.querySelector("#container");

export function contactInfo() {
  const contactTab = document.createElement("div");
  contactTab.id = "contactTab";
  contactTab.setAttribute("data-tab-content", "");

  const contactCard = document.createElement("div");
  contactCard.id = "contact-card";

  const contactHeader = document.createElement("h2");
  contactHeader.id = "contact-header";
  contactHeader.textContent = "Contact Us";

  const contactDetails = document.createElement("p");
  contactDetails.id = "contact-details";
  contactDetails.textContent =
    "📍 Location: 123 Ice Cream Street, Dessert City\n📞 Phone: (123) 456-7890\n✉️ Email: contact@icecreambar.com";

  container.appendChild(contactTab);
  contactCard.appendChild(contactHeader);
  contactCard.appendChild(contactDetails);
  contactTab.appendChild(contactCard);
}
