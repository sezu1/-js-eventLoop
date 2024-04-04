const image = document.getElementById('image');
const imgClass = document.querySelectorAll('.imgClass')
const alt = image.getAttribute('alt');

const link = document.getElementById('link');
const title = link.getAttribute('title')

const paragraph = document.querySelectorAll('.paragraph')



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
    return arguments.push(arg1+arg2+arg3)
}
func(paragraph[0].textContent, paragraph[1].textContent, paragraph[2].textContent,)
console.log(arguments);

//Task 4
let arr = []
function doReverse (a){
    arr.push(a.sort((b,c) => c-b)) 
    return arr
};
doReverse([1, 2, 3]);
console.log(arr);