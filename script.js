const ruleToggle = document.querySelector(".rules");
const ruleBg = document.querySelector(".rule_bg");
const ruleClose = document.getElementById("rule_close");

const ruleRemove = () => {
  ruleToggle.classList.remove("active");
};

ruleBg.addEventListener("click", ruleRemove);
ruleClose.addEventListener("click", ruleRemove);
