/* Loop While */

let Product11 = ["Mouse", "keyboard", "monitor", "CPU", "GPU"];
// مصفوفة فيها 5 عناصر
let index = 0; // البداية من أول عنصر
while (index < 10) {
  // الحلقة ستستمر ما دام index أقل من 10

  console.log(Product11[index]);
  // طباعة العنصر حسب index
  // ⚠️ لكن المصفوفة فيها غير 5 عناصر (0 → 4)
  // من بعد غادي يطبع undefined

  index += 1; // زيادة index في كل دورة

  if (index === 3) {
    break; // يوقف الحلقة عندما يصل index إلى 3
  }
}

console.log("#".repeat(10))

/* Loop Do While */

let i = 0; // البداية من 0

do {
  console.log(i);
  // طباعة قيمة i في كل دورة

  i += 1;
  // زيادة i بواحد في كل مرة

} while (i < 10);
// يستمر التكرار ما دام i أقل من 10

// بعد انتهاء الحلقة
console.log(i);
// طباعة القيمة النهائية لـ i بعد الخروج من الحلقة

