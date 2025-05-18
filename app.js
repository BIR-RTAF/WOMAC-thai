document.getElementById('womacForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const radioFields = form.querySelectorAll('input[type="radio"]:checked');

  let totalScore = 0;
  let maxScore = 0;

  radioFields.forEach((radio) => {
    totalScore += parseInt(radio.value);
    maxScore += 4;
  });

  const percent = ((totalScore / maxScore) * 100).toFixed(2);
  document.getElementById('result').textContent = `คะแนนรวม: ${totalScore} / ${maxScore} (${percent}%)`;
});
