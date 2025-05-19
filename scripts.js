document.getElementById('womacForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const radioFields = form.querySelectorAll('input[type="radio"]:checked');

  let totalScore = 0;
  let maxScore = 0;

  radioFields.forEach((radio) => {
    totalScore += parseInt(radio.value);
    maxScore += 4;document.getElementById('womacForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const radioFields = form.querySelectorAll('input[type="radio"]:checked');

  let totalScore = 0;
  let maxScore = 0;

  radioFields.forEach((radio) => {
    totalScore += parseInt(radio.value);
    maxScore += 4;

    // เปลี่ยนสีของปุ่มตามคะแนนที่เลือก
    const label = radio.nextElementSibling;
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

  const percent = ((totalScore / maxScore) * 100).toFixed(2);
  document.getElementById('result').textContent = `คะแนนรวม: ${totalScore} / ${maxScore} (${percent}%)`;
});
  });

  const percent = ((totalScore / maxScore) * 100).toFixed(2);
  const fullName = document.getElementById('full-name').value;
  const assessmentDate = document.getElementById('assessment-date').value;

  document.getElementById('result').textContent =
    `คุณ ${fullName} ได้คะแนนรวม: ${totalScore} / ${maxScore} (${percent}%)`;

  // ส่งข้อมูลผ่าน CORS proxy ไปยัง Google Apps Script
  fetch("https://corsproxy.io/?https://script.google.com/macros/s/AKfycbwvURtdpEMmiDJ88x_kvwC0AhX85ycv0uPKeNWC3a1mH_3Z8-0HJmQ71G0e5VTw8fs/exec", {
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
