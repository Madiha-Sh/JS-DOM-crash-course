// // Examine the document object //
// //console.dir(document);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.title);
// // document.title = 123;
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Methods
// GetElementsById //

// var header = document.getElementById('main-header');
// var headerTitle = document.getElementById('headerTitle');
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.textContent = 'Hello';
// console.log(headerTitle.textContent);
// headerTitle.innerText = 'hey';
// headerTitle.innerHTML = '<h3>Hey</h3>';
// console.log(headerTitle.textContent);  
// header.style.borderBottom = 'solid 3px #000';

// GetElementsByClassName //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[3].style.fontStyle = 'italic';
// // items[3].style.backgroundColor = 'teal';
// // items[3].style.color = '#fff';
// items[3].style.fontWeight = 'bold';

// for(let i=0; i<items.length; i++) {
//   items[i].style.backgroundColor = 'lightGray';
// }

// var li = document.getElementsByTagName('li');
// console.log('li');

// li[3].style.fontStyle = 'italic';
// // items[3].style.backgroundColor = 'teal';
// // items[3].style.color = '#fff';
// li[3].style.fontWeight = 'bold';

// for(let i=0; i<li.length; i++) {
//   li[i].style.backgroundColor = 'lightGray';
// }

// querySelector //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px #ccc';

// var input = document.querySelector('input');
// input.value = 'add an item';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var firstItem = document.querySelector('.list-group-item');
// firstItem.style.color = 'pink';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'yellow';

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';
titles[0].style.color = 'coral';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}