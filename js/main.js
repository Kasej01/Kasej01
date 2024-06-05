document.addEventListener('DOMContentLoaded', () => {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                fetchProjectData(project);
            });
        });
});

function fetchProjectData(project) {
    fetch(`https://api.github.com/repos/${project.owner}/${project.repo}`)
        .then(response => response.json())
        .then(repoData => {
            displayProject({
                title: repoData.name,
                description: repoData.description,
                image: project.image,
                link: repoData.html_url
            });
        });
}

function displayProject(project) {
    const recentProjectsContainer = document.getElementById('projects-container');
    const allProjectsList = document.getElementById('projects-list');

    const projectElement = createProjectElement(project);

    if (recentProjectsContainer && recentProjectsContainer.children.length < 4) {
        recentProjectsContainer.appendChild(projectElement);
    }

    if (allProjectsList) {
        allProjectsList.appendChild(projectElement);
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
    projectLink.textContent = 'View on Github';
    projectLink.target = '_blank';
    projectDiv.appendChild(projectLink);

    const projDownloadLink = document.createElement('a');
    projDownloadLink.href = project.link;
    projDownloadLink.textContent = 'Download';
    projDownloadLink.target = '_blank';
    projectDiv.appendChild(projDownloadLink);

    return projectDiv;
}
