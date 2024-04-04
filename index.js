const image = document.getElementById('image');
const imgClass = document.querySelectorAll('.imgClass');
const alt = image.getAttribute('alt');

const link = document.getElementById('link');
const title = link.getAttribute('title');

const paragraph = document.querySelectorAll('.paragraph');
const input = document.getElementById('input');
const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const div = document.getElementById('div');



//Task 1
let elementsArray = Array.from(imgClass);
elementsArray[0].onclick = function(){
        alert(alt);
     }
elementsArray[1].onclick = function(){
        alert(alt);
     }
elementsArray[2].onclick = function(){
        alert(alt);
     }


//Task 2
link.onmouseover = function(){
    console.log(title);
}
link2.onmouseover = function(){
    console.log(title);
}
link3.onmouseover = function(){
    console.log(title);
}


//Task 3
let arguments = [];
let func = (arg1, arg2, arg3) => {
    return arguments.push(arg1+arg2+arg3);
}
func(paragraph[0].textContent, paragraph[1].textContent, paragraph[2].textContent);
console.log(arguments);

//Task 4
let arr = [];
function doReverse (a){
    arr.push(a.sort((b,c) => c-b));
    return arr;
};
doReverse([1, 2, 3]);
console.log(arr);




//Доп задание 1
input.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter') {
        console.log(input.value);
    } 
})


//Доп задание 2
buttonOne.addEventListener('click', function (event){
    console.log('Нажата первая кнопка');
})
buttonTwo.addEventListener('click', function (event){
    console.log('Нажата вторая кнопка');
})


//Доп задание 3
function doTimingBlue (event){
    div.style.background = 'blue';
}
div.onmouseover = function doTimingRed(event){
    div.style.background = 'red';
    setTimeout(doTimingBlue, 3000);
}
