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
function finishWizard(event) {
  showProfileSumary();
  hideProfessionalInformationPanel();

  var emptyMessage = "empty";
  document.querySelector("#firstName").innerHTML =
    profileData["firstName"] === undefined
      ? emptyMessage
      : profileData["firstName"];

  document.querySelector("#middleName").innerHTML =
    profileData["middleName"] === undefined
      ? emptyMessage
      : profileData["middleName"];
  document.querySelector("#lastName").innerHTML =
    profileData["lastName"] === undefined
      ? emptyMessage
      : profileData["lastName"];
  document.querySelector("#age").innerHTML =
    profileData["age"] === undefined ? emptyMessage : profileData["age"];
  document.querySelector("#phoneNumber").innerHTML =
    profileData["phoneNumber"] === undefined
      ? emptyMessage
      : profileData["phoneNumber"];
  document.querySelector("#email").innerHTML =
    profileData["email"] === undefined ? emptyMessage : profileData["email"];
  document.querySelector("#highscoolInstitution").innerHTML =
    profileData["highscoolInstitution"] === undefined
      ? emptyMessage
      : profileData["highscoolInstitution"];
  document.querySelector("#highschoolStartYear").innerHTML =
    profileData["highschoolStartYear"] === undefined
      ? emptyMessage
      : profileData["highschoolStartYear"];
  document.querySelector("#higschoolEndYear").innerHTML =
    profileData["higschoolEndYear"] === undefined
      ? emptyMessage
      : profileData["higschoolEndYear"];
  document.querySelector("#collegeInstitution").innerHTML =
    profileData["collegeInstitution"] === undefined
      ? emptyMessage
      : profileData["collegeInstitution"];
  document.querySelector("#collegeStartYear").innerHTML =
    profileData["collegeStartYear"] === undefined
      ? emptyMessage
      : profileData["collegeStartYear"];
  document.querySelector("#collegeEndYear").innerHTML =
    profileData["collegeEndYear"] === undefined
      ? emptyMessage
      : profileData["collegeEndYear"];
  document.querySelector("#companyName").innerHTML =
    profileData["companyName"] === undefined
      ? emptyMessage
      : profileData["companyName"];
  document.querySelector("#role").innerHTML =
    profileData["role"] === undefined ? emptyMessage : profileData["role"];
  document.querySelector("#startDate").innerHTML =
    profileData["startDate"] === undefined
      ? emptyMessage
      : profileData["startDate"];
  document.querySelector("#skills").innerHTML =
    profileData["skills"] === undefined ? emptyMessage : profileData["skills"];
}
function startAgain(event) {
  document.querySelector("#start-wizard").classList.remove("hidden");
  hideProfileSumary();
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

document
  .querySelector("#finish-wizard")
  .addEventListener("click", finishWizard);

document.querySelector("#start-again").addEventListener("click", startAgain);

var profileData = {};

var inputs = document.querySelectorAll("input");

function setValueFromInput(event) {
  var input = event.target;
  var name = input.name;
  var value = input.value;
  profileData[name] = value;
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", setValueFromInput);
}
