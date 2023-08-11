const myList = document.querySelector('#myList');
let title = document.querySelector('#title').innerHTML;
// console.log(title);
const titleArray = title.split(" ");
// console.log(titleArray);
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');

let li1Text = titleArray[0];
let li2Text = titleArray[1];
let li3Text = titleArray[2];
let li4Text = titleArray[3];

li1.append(li1Text);
li2.append(li2Text);
li3.append(li3Text);
li4.append(li4Text);

myList.append(li1);
myList.append(li2);
myList.append(li3);
myList.append(li4);

// adding image to the page

let imageHolder = document.querySelector('#mainImg');
let image = document.createElement('img');
image.setAttribute('src', 'images/Paper.Demo.6.png');
imageHolder.append(image);