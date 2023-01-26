// Working of dynamic typing in the hero section
new Typed(".dynamic-type", {
  strings: ["Web Developer", "Web Designer", "Freelancer"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 2000,
});

// Making the skills progress bar work
const allSkills = document.querySelectorAll(".progress");
allSkills.forEach((skill) => {
  skill.style.width = `${skill.attributes.width.value}%`;
});
