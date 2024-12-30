document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/Kasej01/repos?sort=created&direction=desc')
        .then(response => response.json())
        .then(repos => {
            repos.slice(0, 10).forEach(repo => {
                displayProject({
                    title: repo.name,
                    description: repo.description,
                    image: `assets/images/${repo.name}.png`,
                    link: repo.html_url
                });
            });
        });
});

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
    projectImage.src = project.image || 'default-image-url.jpg';
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

document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: "Java", confidence: 50, proof: "https://github.com/Kasej01/RolePlayers" },
        { name: "Python", confidence: 60, proof: "projects/python-project.html" },
        { name: "Assembly", confidence: 35 },
        { name: "C", confidence: 65 },
        { name: "C#", confidence: 65 },
        { name: "C++", confidence: 50 },
        { name: "React", confidence: 60, proof: "https://www.dogsafesnacks.com" },
        { name: "Node", confidence: 50 },
        { name: "Cloud Concepts", confidence: 60, proof: "assets/AWS Certified Cloud Practitioner certificate.pdf" },
        { name: "Database Management", confidence: 70 },
        { name: "Version Control (Git)", confidence: 60, proof: "https://github.com/Kasej01" },
        { name: "Networking and Security", confidence: 50 },
        { name: "IAM Permissions", confidence: 60 },
        { name: "Cloud Concepts", confidence: 60, proof: "assets/AWS Certified Cloud Practitioner certificate.pdf" }
    ];

    const skillsContainer = document.getElementById("skills-container");

    skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");

        const skillName = document.createElement("h3");
        skillName.textContent = skill.name;

        const confidenceBarContainer = document.createElement("div");
        confidenceBarContainer.classList.add("confidence-bar-container");

        const confidenceBar = document.createElement("div");
        confidenceBar.classList.add("confidence-bar");
        confidenceBar.style.width = `${skill.confidence}%`;

        if (skill.confidence >= 80) {
            confidenceBar.style.backgroundColor = "green";
        } else if (skill.confidence >= 60) {
            confidenceBar.style.backgroundColor = "limegreen";
        } else if (skill.confidence >= 40) {
            confidenceBar.style.backgroundColor = "yellow";
        } else {
            confidenceBar.style.backgroundColor = "orange";
        }

        confidenceBarContainer.appendChild(confidenceBar);

        skillCard.appendChild(skillName);
        skillCard.appendChild(confidenceBarContainer);

        if (skill.proof) {
            const proofButton = document.createElement("a");
            proofButton.href = skill.proof;
            proofButton.textContent = "Proof";
            proofButton.classList.add("proof-button");
            skillCard.appendChild(proofButton);
        }

        skillsContainer.appendChild(skillCard);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    alert('Your message has been sent!');
});
