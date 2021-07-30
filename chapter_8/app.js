const form = document.querySelector("form");
const correctAnswers = ["B", "B", "B", "B"];
const result = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const selectedAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  selectedAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");
});
