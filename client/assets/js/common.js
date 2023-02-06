const initialMessage = document.querySelector("#initial-message");

const projectsNavLink = document.querySelector("#projects-nav");
const projectsContent = document.querySelector("#projects");

const skillsNavLink = document.querySelector("#skills-nav");
const skillsContent = document.querySelector("#skills");

const contactNavLink = document.querySelector("#contact-nav");
const contactContent = document.querySelector("#contact");

const contentAreas = [
    {
        tag: "projects", 
        container: projectsContent
    },
    {
        tag: "skills", 
        container: skillsContent
    },
    {
        tag: "contact", 
        container: contactContent
    }
]

const hideOtherContentAreas = currentArea => {
    initialMessage.style.display = "none";
    contentAreas.forEach(area => {
        console.log(area.container.getAttribute("id"));
        if(area.tag !== currentArea){
            area.container.classList.remove("selected")
            area.container.classList.add("unselected");
        }
    })
}

const revealProjectsContent = e => {
    e.preventDefault();
    hideOtherContentAreas("projects");
    projectsContent.classList.remove("unselected");
    projectsContent.classList.add("selected");
}

const revealSkillsContent = e => {
    e.preventDefault();
    hideOtherContentAreas("skills");
    skillsContent.classList.remove("unselected");
    skillsContent.classList.add("selected");
}

const revealContactContent = e => {
    e.preventDefault();
    hideOtherContentAreas("contact");
    contactContent.classList.remove("unselected");
    contactContent.classList.add("selected");
}

projectsNavLink.addEventListener("click", revealProjectsContent);
skillsNavLink.addEventListener("click", revealSkillsContent);
contactNavLink.addEventListener("click", revealContactContent);