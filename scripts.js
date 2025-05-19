document.getElementById('womacForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const radioFields = form.querySelectorAll('input[type="radio"]:checked');

  let totalScore = 0;
  let maxScore = 0;

  radioFields.forEach((radio) => {
    totalScore += parseInt(radio.value);
    maxScore += 4;

    // เปลี่ยนสีของปุ่มตามคะแนนที่เลือกโดยการเพิ่ม class
    const label = radio.nextElementSibling;
    label.classList.remove('color-0', 'color-1', 'color-2', 'color-3', 'color-4'); // ลบ class เดิม
    switch (radio.value) {
      case '0':
        label.classList.add('color-0'); // เพิ่ม class สีฟ้า
        break;
      case '1':
        label.classList.add('color-1'); // เพิ่ม class สีเขียว
        break;
      case '2':
        label.classList.add('color-2'); // เพิ่ม class สีเหลือง
        break;
      case '3':
        label.classList.add('color-3'); // เพิ่ม class สีส้ม
        break;
      case '4':
        label.classList.add('color-4'); // เพิ่ม class สีแดง
        break;
    }
  });

  const percent = ((totalScore / maxScore) * 100).toFixed(2);
  document.getElementById('result').textContent = `คะแนนรวม: ${totalScore} / ${maxScore} (${percent}%)`;
});
