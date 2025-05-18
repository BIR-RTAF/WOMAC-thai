document.getElementById('womacForm').addEventListener('submit', function(e) {
e.preventDefault();

const form = e.target;

// รายชื่อฟิลด์ทั้งหมดตามคำถามครบ (34 ข้อ: 5 + 2 + 17)
const fields = [
'pain-rest', 'pain-stand', 'pain-walk', 'pain-stairs', 'pain-night',
'stiffness-morning', 'stiffness-evening',
'difficulty-stairs-up', 'difficulty-stairs-down', 'difficulty-bed-move',
'difficulty-bed-getup', 'difficulty-toilet', 'difficulty-bath', 'difficulty-chair',
'difficulty-kneel', 'difficulty-stand-up', 'difficulty-stand-flat', 'difficulty-walk-flat',
'difficulty-sock-put', 'difficulty-sock-takeoff', 'difficulty-car', 'difficulty-shopping',
'difficulty-light-housework', 'difficulty-heavy-housework'
];

let totalScore = 0;
let maxScore = 0;

fields.forEach(id => {
const val = parseInt(form[id].value);
if (!isNaN(val)) {
totalScore += val;
maxScore += 4;
}
});

const percent = ((totalScore / maxScore) * 100).toFixed(2);

const resultDiv = document.getElementById('result');
resultDiv.textContent = `คะแนนรวม: ${totalScore} / ${maxScore} (${percent}%)`;
});
