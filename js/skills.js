function loadSkills() {
  fetch('data/skills.json')
    .then(response => response.json())
    .then(data => {
      const coreSkillsContainer = document.getElementById('coreSkills');
      const softwareSkillsContainer = document.getElementById('softwareSkills');

      data.coreSkills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill';
        div.innerHTML = `
          <div class="skill-icon-wrapper">
            <img class="default-icon" src="${skill.icon}" alt="${skill.title}" width="60" height="60"/>
            ${skill.hoverIcon ? `<img class="hover-icon" src="${skill.hoverIcon}" alt="${skill.title} Hover" width="60" height="60"/>` : ''}
          </div>
          <p class="skill-title">${skill.title}</p>
        `;
        coreSkillsContainer.appendChild(div);
      });

      data.softwares.forEach(software => {
        const div = document.createElement('div');
        div.className = 'skill';
        div.innerHTML = `
          <div class="skill-icon-wrapper">
            <img class="default-icon" src="${software.icon}" alt="${software.title}" width="60" height="60"/>
            ${software.hoverIcon ? `<img class="hover-icon" src="${software.hoverIcon}" alt="${software.title} Hover" width="60" height="60"/>` : ''}
          </div>
          <p class="skill-title">${software.title}</p>
        `;
        softwareSkillsContainer.appendChild(div);
      });
    })
    .catch(error => console.error('Error loading skills:', error));
}

document.addEventListener("DOMContentLoaded", loadSkills);
