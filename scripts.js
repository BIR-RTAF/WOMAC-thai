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
  const fullName = document.getElementById('full-name').value;
  const assessmentDate = document.getElementById('assessment-date').value;

  document.getElementById('result').textContent =
    `คุณ ${fullName} ได้คะแนนรวม: ${totalScore} / ${maxScore} (${percent}%)`;

  // ส่งข้อมูลไป Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbzoeMb9JaVEZ9TiyYcHpG3mqrDFcsi-sV2o3bDXF3P0TV3tzL2JZYUew3g8axS62QmIww/exec", {
    method: "POST",
    body: JSON.stringify({
      fullName,
      assessmentDate,
      totalScore,
      percent
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(text => console.log("ส่งสำเร็จ:", text))
    .catch(err => console.error("ส่งไม่สำเร็จ:", err));
});
