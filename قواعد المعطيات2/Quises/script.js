// script.js

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", checkAnswers);
});

function checkAnswers() {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
      const correctInput = question.querySelector(".correct input[type=radio]:checked");

      if (correctInput) {
          const label = correctInput.parentElement;
          label.style.backgroundColor = "green";
          label.style.color = "white";

          const tooltip = question.querySelector(".tooltip");
          tooltip.style.visibility = "visible";
      }
  });
}
