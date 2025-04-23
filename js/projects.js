async function loadProjects() {
    const res = await fetch('data/projects.json');
    const projects = await res.json();
    const container = document.getElementById('projectsContainer');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project';

        const projectLink = project.external
            ? project.url
            : `projects/${project.slug}.html`;

        card.innerHTML = `
        <a href="${projectLink}" ${project.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            <img src="${project.image}" alt="${project.title}" />
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div>${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            </div>
        </a>
      `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);
