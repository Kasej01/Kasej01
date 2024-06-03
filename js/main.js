document.addEventListener('DOMContentLoaded', () => {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            displayProjects(data);
        });
});

function displayProjects(projects) {
    const recentProjectsContainer = document.getElementById('projects-container');
    const allProjectsList = document.getElementById('projects-list');

    if (recentProjectsContainer) {
        projects.slice(0, 3).forEach(project => {
            recentProjectsContainer.appendChild(createProjectElement(project));
        });
    }

    if (allProjectsList) {
        projects.forEach(project => {
            allProjectsList.appendChild(createProjectElement(project));
        });
    }
}

function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectDiv.appendChild(projectImage);

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectDiv.appendChild(projectTitle);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectDiv.appendChild(projectDescription);

    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.textContent = 'View Project';
    projectLink.target = '_blank';
    projectDiv.appendChild(projectLink);

    return projectDiv;
}
