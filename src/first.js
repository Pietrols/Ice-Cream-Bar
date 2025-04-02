import { createWelcomeMessage } from "./home.js";
import { menuSelection } from "./menu.js";
import { aboutInfo } from "./about.js";
import { contactInfo } from "./contact.js";

const tabs = document.querySelectorAll("[data-tab-target]");
const container = document.querySelector("#container");

export const pages = {
  home: createWelcomeMessage,
  menu: menuSelection,
  about: aboutInfo,
  contact: contactInfo,
};

function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export function switchingTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.id;
      clearContainer();

      if (pages[targetId]) {
        pages[targetId](container);
      }

      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}
switchingTabs();
