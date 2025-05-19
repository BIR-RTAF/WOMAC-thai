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

    // เปลี่ยนสีของปุ่มโดยการใช้ class
    const label = radio.nextElementSibling;  // หาป้าย label ที่อยู่ถัดจาก radio button
    label.style.backgroundColor = "";  // รีเซ็ตสีพื้นหลังเก่า

    // กำหนดสีตามค่าที่เลือก
    switch (radio.value) {
      case '0':
        label.style.backgroundColor = '#a5d6a7'; // สีฟ้า
        break;
      case '1':
        label.style.backgroundColor = '#81c784'; // สีเขียว
        break;
      case '2':
        label.style.backgroundColor = '#fff176'; // สีเหลือง
        break;
      case '3':
        label.style.backgroundColor = '#ffb74d'; // สีส้ม
        break;
      case '4':
        label.style.backgroundColor = '#e57373'; // สีแดง
        break;
    }
  });

  // คำนวณคะแนนรวมและแสดงผล
  const percent = ((totalScore / maxScore) * 100).toFixed(2);
  document.getElementById('result').textContent = `คะแนนรวม: ${totalScore} / ${maxScore} (${percent}%)`;
});
