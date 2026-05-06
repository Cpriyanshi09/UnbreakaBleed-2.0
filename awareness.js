// sign_in.js

document.getElementById("SignInPage").addEventListener("click", function() {
    window.location.href = "sign_in.html";
});

document.getElementById("Check_your_symptoms1").addEventListener("click", function() {
    window.location.href = "symptom-checker.html";
});

// what is breast cancer 

const title = document.getElementById("bc-title");
const text = document.getElementById("bc-text");

title.addEventListener("mouseenter", () => {
  text.classList.add("active"); // shows it
});

// types of breast cancer 

const bcTypesTitle = document.getElementById("bc-types");
const bcTypesPara = document.getElementById("bc-types-para");
const bcTypesContent = document.getElementById("bc-types-content");
const bcTypesInfo = document.getElementById("bc-types-info");

bcTypesTitle.addEventListener("mouseenter", () => {
  bcTypesPara.classList.add("active");
  bcTypesContent.classList.add("active");
  bcTypesInfo.classList.add("active");
});

// symptom_checker.js

document.getElementById("Check_your_symptoms2").addEventListener("click", function() {
    window.location.href = "symptom-checker.html";
});

document.getElementById("get_support").addEventListener("click", function() {
    window.location.href = "findcare-emergencyinfo.html";
});
