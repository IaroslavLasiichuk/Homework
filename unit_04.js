// Task 1
// При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

function f1() {
click = document.querySelector('.b-1').onclick;
out = document.querySelector('.out-1');
if (click) {
out.textContent = 1;
}
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. Т.е. как видите, мы можем повесить клик на любой элемент.

function f2() {
click = document.querySelector('.b-1').onclick;
out = document.querySelector('.out-2');
if (click) {
    out.textContent = 2;   
}
}

document.querySelector('.i-2').onclick = f2;


// Task 3
//  При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. Т.е. как видите, мы можем повеcить клик на любой элемент.

function f3() {
    click = document.querySelector('.p-3').onclick;
    out = document.querySelector('.out-3');
    if (click) {
        out.textContent = 3;
    }
}

document.querySelector('.p-3').onclick = f3;


// Task 4. 
// При клике по кнопке .b-4 запускается функция f4. Функция проверяет состояние .i-4 и если он checked - выводит true, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае - div.out-4

function f4() {
const myCheckBox = document.querySelector('.i-4');
const out = document.querySelector('.out-4');
if (myCheckBox.checked) {
   out.textContent = true;
}
else {
    out.textContent = false;
}
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
// При клике по кнопке .b-5 запускается функция f5. Функция проверяет состояние .i-5 и если он checked - выводит value данного элемента, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

function f5() {
const myCheckBox = document.querySelector('.i-5');
const value = document.querySelector('.i-5').value; 
const out = document.querySelector('.out-5');
if (myCheckBox.checked) {
    out.textContent = value;
}
else {
    out.textContent = false;
}
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
// При нажатии на кнопку выводите value из input.i-6 в div.out-6. Обратите внимание, что даже скрытый hidden input - нам не помеха. 

function f6() {
const click = document.querySelector('.i-6');
const value = document.querySelector('.i-6').value; 
const out = document.querySelector('.out-6');
if (click) {
    out.textContent = value;
}
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии на кнопку выводите в div.out-71 value прописанное в input .i-7. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

function f7() {
   const inputValue = document.querySelector('.i-7').value;
   const out71 = document.querySelector('.out-71');
   const out72 = document.querySelector('.out-72');
   out71.textContent = inputValue;
  
   if (inputValue.length > 6 ) {
       out72.textContent = 1;  
   }
   else {
       out72.textContent = 0;
   }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 запускается функция f8. Функция с помощью innerHTML создает в .out-8 новый div с классом "js2" и текстом "new div". Нажали несколько раз? Создаем несколько раз!

function f8() {
    const out8 = document.querySelector('.out-8');
    out8.innerHTML += "<div class='js2'>new div</div>"
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 запускаем функцию f9. Функция проверяет checked элемента .r-9. Если элемент выбран (checked) то выводит в .out-9 value radiobutton. Если не выбран - выводит false.

function f9() {
const out = document.querySelector('.out-9');
const input = document.querySelector('.r-9');
const value = document.querySelector('.r-9').value;
if (input.checked) {
    out.textContent = value;
}
else {
    out.textContent = false;
}
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 запускаем функцию f10. Функция получает из .i-10 значение цвета и окрашивает style.background элемента .out-10 в этот цвет.


function f10() {
    const inputValue = document.querySelector('.i-10').value;
    document.querySelector('.out-10').style.background = inputValue;
}
document.querySelector('.b-10').onclick = f10;


// Task 11
// При нажатии кнопки .b-11 запускается функция f11. Функция получает цвет из .i-111 и присваивает как value элементу .i-112. Т.е. после нажатия кнопки выбранный цвета в первом и втором input станут одинаковые.

function f11() {
   const color = document.querySelector('.i-111').value;
   document.querySelector('.i-112').style.background = color;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 запускается функция f12. Функция выводит дату из .i-12 в out-12.

function f12() {
const out = document.querySelector('.out-12');
const date = document.querySelector('.i-12').value;
out.textContent = date;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  При изменении положения ползунка .i-13 выводите его значение в out-13. Обратите внимание на событие.

function f13() {
    const out = document.querySelector('.out-13');
    const input = document.querySelector('.i-13').value;
    out.textContent = input;

}

document.querySelector('.i-13').oninput = f13;

// Task 14
// При нажатии на кнопку выводите текст из textarea .t-14 в .out-14.

function f14() {
const out = document.querySelector('.out-14');
const text = document.querySelector('.t-14').value;
out.textContent = text;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии кнопки .b-15 функция должна выводить текст из .i-15 в textarea .t-15 и в .out-15.

function f15() {
const out = document.querySelector('.out-15');
const text = document.querySelector('.i-15').value;
const input = document.querySelector('.t-15');
input.textContent = text;
if (text) {
    out.textContent = text;
}
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии на кнопку .b-16 выводите в .out-16 value выбранного option из .s-16.

function f16() {
    // для получения выбранного option просто получите select в переменную и select.value;
const out = document.querySelector('.out-16');
const select = document.querySelector('.s-16').value;
out.textContent = select;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// При смене выбранного значения .s-17 выводите в .out-17 value выбранного option из .s-17.

function f17() {
const out = document.querySelector('.out-17');
const select = document.querySelector('.s-17').value;
console.log(select);
out.textContent = select;
 }

document.querySelector('.s-17').onchange = f17;

// Task 18
// При смене выбранного значения в s-18, получайте из него value выбранного option и присвойте данный value в input .i-18.

function f18() {
const select = document.querySelector('.s-18').value;
const inputValue = document.querySelector('.i-18');
inputValue.value = select;
console.log(select);

}

document.querySelector('.s-18').onchange = f18;

// Task 19
// На странице создан div.out-19. По нажатию кнопки, получите из него текст и присвойте в value элемента .i-19.

function f19() {
const out = document.querySelector('.out-19').textContent;
input = document.querySelector('.i-19');
input.value = out;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// У вас есть два select. Напишите код, который при изменении select .s-201 будет аналогично изменять выбранный option в .s-202.

function f20() {
const select = document.querySelector('.s-201').value;
const select1 = document.querySelector('.s-202');
select1.value = select;
}

document.querySelector('.s-201').onchange = f20;