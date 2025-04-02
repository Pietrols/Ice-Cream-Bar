import github from "./images/github.svg";

export function createFooter() {
  const footer = document.createElement("footer");
  footer.id = "footer";

  const githubSection = document.createElement("div");
  githubSection.id = "github-section";

  const githubLogo = document.createElement("img");
  githubLogo.id = "github-logo";
  githubLogo.src = "github"; // Ensure this image is in your project folder
  githubLogo.alt = "GitHub Logo";

  const copyrightText = document.createElement("span");
  copyrightText.textContent = "@Pietrols 2025";

  // Append elements
  githubSection.appendChild(githubLogo);
  githubSection.appendChild(copyrightText);
  footer.appendChild(githubSection);

  document.body.appendChild(footer);
}

// Call the function to add the footer when the page loads
createFooter();
