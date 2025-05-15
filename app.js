document.getElementById("womacForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อกด Submit

    let totalScore = 0;

    // การคำนวณคะแนนจากคำถาม
    const pain1 = document.querySelector('input[name="pain1"]:checked');
    if (pain1) totalScore += parseInt(pain1.value);

    const maxScore = 96; // คะแนนสูงสุด
    const percentage = (totalScore / maxScore) * 100;

    // แสดงผลลัพธ์
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = "คะแนนรวม: " + totalScore + " / " + maxScore;
    document.getElementById("percentage").textContent = "เปอร์เซ็นต์: " + percentage.toFixed(2) + "%";

    // คำอธิบายผลลัพธ์
    let interpretation = "";
    if (percentage < 20) {
        interpretation = "ไม่มีอาการรุนแรง";
    } else if (percentage < 50) {
        interpretation = "มีอาการปานกลาง";
    } else {
        interpretation = "มีอาการรุนแรง";
    }
    document.getElementById("interpretation").textContent = interpretation;
});
