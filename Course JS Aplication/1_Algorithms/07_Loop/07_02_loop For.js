/* Loop For
   تُستخدم لتكرار الكود عدد محدد من المرات
   start index: البداية من 0
   condition: التكرار حتى أقل من 10
*/

for (let i = 0; i < 10; i++) {

  // i يبدأ من 0 ويزيد بواحد في كل دورة (i++)
  // الحلقة ستستمر ما دام i < 10

  console.log(i); // طباعة قيمة i في كل مرة
}

// *Looping On Sequences

let Myfriend = [1, 2, "Hatim", "Morad", "Bouchra", "Rachid", "Israe"];
let OnlyNames = []
// الوصول اليدوي (بدون loop)
// كل index كنديروه بوحدو
console.log(Myfriend[0]);
console.log(Myfriend[1]);
console.log(Myfriend[2]);
console.log(Myfriend[3]);
console.log(Myfriend[4]);

/* =========================
   Static Loop (حلقة ثابتة)
   ========================= */

// كنحدد عدد التكرارات يدوياً (5 مرات فقط)
for (let i = 0; i < 5; i++) {
  console.log(`${i} - ${Myfriend[i]}`);
}

/* =========================
   Dynamic Loop (حلقة ديناميكية)
   ========================= */

// كنستعمل length باش ندور على جميع العناصر تلقائياً
for (let i = 0; i < Myfriend.length; i++) {
  console.log(`${i} - ${Myfriend[i]}`);
}

// EX
for (let i = 0; i < Myfriend.length; i++) {
  if (typeof Myfriend[i] === "string") {
    OnlyNames.push(Myfriend[i]);
  }
}
console.log(OnlyNames);

// *Nested Loops And Trainings
// let Product1 = ["Mouse", "keyboard", "monitor", "CPU", "GPU"];
// let color = ["Red", "Green", "Black"];
// let models = [2020, 2021];
// for (let i = 0; i < Product1.length; i++) {
//   console.log(`#`.repeat(15));
//   console.log(`# ${Product1[i]}`);
//   console.log(`#`.repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < color.length; j++) {
//     console.log(`* ${color[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`* ${models[k]}`);
//   }
// }



// * Loop Control - Break, Continue, Label
let Product11 = ["Mouse", "keyboard", 70, 999, "monitor",20, 30, 50, "CPU", "GPU"];
let color1 = ["Red", "Green", "Black"];
mainLoop: for (let i = 0; i < Product11.length; i++) {
  if ( typeof Product11[i] === "number"){
    continue;
  }
  console.log(Product11[i]);
  NestedLoop: for (let k = 0; k < color1.length; k++){
    console.log(`* ${color1[k]}`);
      if (color1[k] === "Green"){
        break mainLoop;
  }

  }
}

for (let i = 0; i < 10; i++) {

  // إذا وصلنا لـ 7 نوقف الحلقة كاملة
  if (i === 7) {
    break;
  }

  // إذا وصلنا لـ 3 نتجاوزها فقط
  if (i === 3) {
    continue;
  }

  console.log(i);
}

// // For Advanced Example
// let Product = ["Mouse", "keyboard", "monitor", "CPU", "GPU", "Speaker"];

// let i = 0;
// for (;;) {
//   console.log(Product[i]);
//   i++;
//   if( i === Product.length){
//     break;
//   }
// }
