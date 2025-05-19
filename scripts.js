document.getElementById('womacForm').addEventListener('submit', function (e) {
  e.preventDefault();  // หยุดการส่งฟอร์ม
  const form = e.target;
  const radioFields = form.querySelectorAll('input[type="radio"]:checked');  // หาทุก input radio ที่เลือกแล้ว

  let totalScore = 0;
  let maxScore = 0;

  // สำหรับทุกๆ radio ที่เลือก
  radioFields.forEach((radio) => {
    totalScore += parseInt(radio.value);  // เพิ่มคะแนนที่เลือก
    maxScore += 4;  // เพิ่มคะแนนสูงสุดที่เป็น 4
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

  // แสดงผลลัพธ์คะแนนรวมและระดับความรุนแรง
  const resultText = `คะแนนรวม: ${totalScore} / ${maxScore}`;
  document.getElementById('result').textContent = resultText;  // แสดงผลใน #result
  document.getElementById('severity-level').textContent = severityLevel;  // แสดงระดับความรุนแรงใน #severity-level
});
