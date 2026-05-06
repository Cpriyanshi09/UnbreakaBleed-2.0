// sign_in.js

document.getElementById("SignInPage").addEventListener("click", function() {
    window.location.href = "sign_in.html";
});


// checkboxes

const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
const symptomCount = document.getElementById('symptomCount');
const submitBtn = document.getElementById('submitBtn');

function updateCount() {
      let count = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked').length;
      symptomCount.textContent = `Symptoms Selected: ${count}`;

      if (count > 0) {
        submitBtn.disabled = false;
        submitBtn.classList.add("enabled");
      } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove("enabled");
      }
    }
    checkboxes.forEach(cb => cb.addEventListener('change', updateCount));
    
function calculateRisk() {
  let totalRisk = 0;
  checkboxes.forEach(cb => {
    if(cb.checked){
      totalRisk += parseInt(cb.getAttribute("data-risk"));
    }
  });

      let message = "";
      let riskClass = "";

      if (totalRisk < 30) {
        message = "You have LOW risk. But you need to take care of your lifestyle, take precautions, and do regular health checkups.";
        riskClass = "low";
      } else if (totalRisk >= 30 && totalRisk <= 60) {
        message = "You have MODERATE risk. You need to improve your lifestyle habits and take advice from a doctor.";
        riskClass = "moderate";
      } else {
        message = "You have HIGH risk. You need to consult a specialist immediately.";
        riskClass = "high";
      }

      resultScreen.innerHTML = `
        <h2>Your Risk Assessment</h2>
        <p>Total Risk Score: <strong>${totalRisk}%</strong></p>
        <p class="${riskClass}">${message}</p>
      `;
      resultScreen.style.display = "block";
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateCount));
    submitBtn.addEventListener('click', calculateRisk);

// aware-symptoms.html

document.getElementById("learn_about_symptoms").addEventListener("click", function() {
    window.location.href = "awareness.html";
});

