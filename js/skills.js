function loadSkills() {
  fetch('data/skills.json')
    .then(response => response.json())
    .then(data => {
      const coreSkillsContainer = document.getElementById('coreSkills');
      const softwareSkillsContainer = document.getElementById('softwareSkills');

      data.coreSkills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill' + (skill.highlight ? ' highlighted' : '');
        div.innerHTML = `
          <img src="${skill.icon}" alt="${skill.title}" width="60" height="60"/>
          <h4>${skill.title}</h4>
          ${skill.description ? `<p>${skill.description}</p>` : ''}
        `;
        coreSkillsContainer.appendChild(div);
      });

      data.softwares.forEach(software => {
        const div = document.createElement('div');
        div.className = 'software';
        div.innerHTML = `
          <img src="${software.icon}" alt="${software.title}" width="60" height="60"/>
          <h4>${software.title}</h4>
        `;
        softwareSkillsContainer.appendChild(div);
      });
    })
    .catch(error => console.error('Error loading skills:', error));
}

document.addEventListener("DOMContentLoaded", loadSkills);
