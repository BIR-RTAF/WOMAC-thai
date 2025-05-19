document.getElementById('womacForm').addEventListener('submit', function (e) {
  e.preventDefault();  // หยุดการส่งฟอร์ม
  const form = e.target;
  const radioFields = form.querySelectorAll('input[type="radio"]:checked');  // หาทุก input radio ที่เลือกแล้ว
document.addEventListener('DOMContentLoaded', function () {
  // ฟังก์ชันที่ทำงานหลังจากหน้าเว็บโหลดเสร็จ
  const radioFields = document.querySelectorAll('input[type="radio"]'); // หาทุก input radio

  radioFields.forEach((radio) => {
    const label = radio.nextElementSibling;  // หาป้าย label ที่อยู่ถัดจาก radio button

    // กำหนดสีของป้าย label ตามคะแนน
    switch (radio.value) {
      case '0':
        label.style.backgroundColor = '#a5d6a7';  // สีฟ้า
        break;
      case '1':
        label.style.backgroundColor = '#81c784';  // สีเขียว
        break;
      case '2':
        label.style.backgroundColor = '#fff176';  // สีเหลือง
        break;
      case '3':
        label.style.backgroundColor = '#ffb74d';  // สีส้ม
        break;
      case '4':
        label.style.backgroundColor = '#e57373';  // สีแดง
        break;
    }
  });
});

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

  // แสดงผลลัพธ์คะแนนรวม
  const resultText = `คะแนนรวม: ${totalScore} / ${maxScore}`;
  document.getElementById('result').textContent = resultText;  // แสดงผลใน #result

  // แสดงผลระดับความรุนแรงใน #severity-level
  document.getElementById('severity-level').textContent = severityLevel;
});
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

  // แสดงผลลัพธ์คะแนนรวม
  const resultText = `คะแนนรวม: ${totalScore} / ${maxScore}`;
  document.getElementById('result').textContent = resultText;  // แสดงผลใน #result

  // แสดงผลระดับความรุนแรงใน #severity-level
  document.getElementById('severity-level').textContent = severityLevel;
});
