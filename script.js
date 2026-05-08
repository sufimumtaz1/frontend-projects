const projectData = [
  {
    title: "Landing Page",
    description: "Responsive landing page with clean UI."
  },
  {
    title: "Weather App",
    description: "Weather information using API integration."
  },
  {
    title: "Portfolio Design",
    description: "Modern portfolio website layout."
  }
];

const container = document.getElementById("projects");

function loadProjects() {
  projectData.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <button onclick="showMessage('${project.title}')">
        View Project
      </button>
    `;

    container.appendChild(card);
  });
}

function showMessage(projectName) {
  alert(projectName + " project preview coming soon.");
}

window.onload = loadProjects;
