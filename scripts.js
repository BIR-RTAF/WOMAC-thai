document.getElementById('womacForm').addEventListener('submit', function (e) {
  e.preventDefault();  // หยุดการส่งฟอร์ม
  const form = e.target;
  const radioFields = form.querySelectorAll('input[type="radio"]:checked');

  let totalScore = 0;
  let maxScore = 0;

  // สำหรับทุกๆ radio ที่เลือก
  radioFields.forEach((radio) => {
    totalScore += parseInt(radio.value);
    maxScore += 4;
  });

  // กำหนดระดับความรุนแรงตามคะแนนรวม
  let severityLevel = "";
  if (totalScore <= 15) {
    severityLevel = "ระดับความรุนแรงน้อย";
  } else if (totalScore > 15 && totalScore <= 40) {
    severityLevel = "ระดับความรุนแรงปานกลาง";
  } else if (totalScore > 40) {
    severityLevel = "ระดับความรุนแรงมาก แนะนำรีบปรึกษาแพทย์เฉพาะทาง";
  }

  // แสดงผลลัพธ์
  document.getElementById('result').textContent = `คะแนนรวม: ${totalScore} / ${maxScore} (${severityLevel})`;
});
