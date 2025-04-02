// Content container file
const container = document.querySelector("#container");

// Function to create the welcome message
export function createWelcomeMessage() {
  // Home page container content div
  const home = document.createElement("div");
  home.id = "homeTab";
  home.setAttribute("data-tab-content", "");
  home.classList.add("active-tab");
  container.appendChild(home);

  // Welcome message container div
  const welcomeMessage = document.createElement("div");
  welcomeMessage.classList.add("welcome-message");
  home.appendChild(welcomeMessage);

  const welcomeHeader = document.createElement("h2");
  welcomeHeader.id = "welcome-header";
  welcomeHeader.textContent = "THE ICE CREAM BAR";
  welcomeMessage.appendChild(welcomeHeader);

  const welcomeBody = document.createElement("h3");
  welcomeBody.id = "welcome-body";
  welcomeMessage.appendChild(welcomeBody);

  const paragraphOne = document.createElement("p");
  paragraphOne.textContent =
    "Step into a world of creamy delights and unforgettable flavors! At The Ice Cream Bar, we're all about turning your dessert cravings into pure joy. We serve more than just ice cream - we serve happiness in every bite.";
  welcomeBody.appendChild(paragraphOne);

  const paragraphTwo = document.createElement("p");
  paragraphTwo.textContent =
    "Bring your friends, share a laugh, and make memories over mouthwatering treats. Because life's too short to skip dessert - so come indulge with us today! 🍨❤️";
  welcomeBody.appendChild(paragraphTwo);

  const menu_button = document.createElement("button");
  menu_button.id = "menu-button";
  menu_button.textContent = "LET ME SEE THE MENU";
  welcomeBody.appendChild(menu_button);

  // Programmatically trigger the "menu" button click to switch tabs
  menu_button.addEventListener("click", () => {
    document.querySelector("#menu").click();
  });
}
