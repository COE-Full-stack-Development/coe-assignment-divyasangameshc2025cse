const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill-btn");
const skillsList = document.getElementById("skills-list");

addSkillBtn.addEventListener("click", function () {
  const skill = skillInput.value.trim();

  if (skill !== "") {
    const li = document.createElement("li");
    li.textContent = skill;

    skillsList.appendChild(li);

    skillInput.value = "";
  }
});
