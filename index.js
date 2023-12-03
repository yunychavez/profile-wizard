function showPersonalInformationPanel() {
  document.querySelector(".personal-information").classList.remove("hidden");
}

function hideEducationalInformationPanel() {
  document.querySelector(".educational-information").classList.add("hidden");
}

function showEducationalInformationPanel() {
  document.querySelector(".educational-information").classList.remove("hidden");
}

function hidePersonalInformationPanel() {
  document.querySelector(".personal-information").classList.add("hidden");
}

function showProfessionalInformationPanel() {
  document
    .querySelector(".professional-information")
    .classList.remove("hidden");
}

function hideProfessionalInformationPanel() {
  document.querySelector(".professional-information").classList.add("hidden");
}

function startWizard(event) {
  event.target.classList.add("hidden");
  showPersonalInformationPanel();
}

function backToStep1(event) {
  showPersonalInformationPanel();
  hideEducationalInformationPanel();
}

function goToStep2(event) {
  hidePersonalInformationPanel();
  showEducationalInformationPanel();
}
function goToStep3(event) {
  hideEducationalInformationPanel();
  showProfessionalInformationPanel();
}
function backToStep2(event) {
  showEducationalInformationPanel();
  hideProfessionalInformationPanel();
}

document.querySelector("#start-wizard").addEventListener("click", startWizard);

document
  .querySelector("#back-to-step-1")
  .addEventListener("click", backToStep1);

document.querySelector("#go-to-step-2").addEventListener("click", goToStep2);

document.querySelector("#go-to-step-3").addEventListener("click", goToStep3);
document
  .querySelector("#back-to-step-2")
  .addEventListener("click", backToStep2);

var profileData = {};

var inputs = document.querySelectorAll("input");

function setValueFromInput(event) {
  var input = event.target;
  var name = input.name;
  var value = input.value;
  profileData[name] = value;
}

function finishWizard() {
  document.querySelector("#firstName").innerHTML = profileData["firstName"];
  document.querySelector("#middleName").innerHTML = profileData["middleName"];
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", setValueFromInput);
}

document
  .querySelector("#finish-wizard")
  .addEventListener("click", finishWizard);
