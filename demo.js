// document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[1].style.color = 'blue';
items[4].innerText = 'Hello';
items[3].textContent = 'Hiiiiiiiiiiiii';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
// console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Goodbye';

// Convert HTML Collection into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
    console.log(li.innerText);
    li.textContent = `${index} : Hello`;
});

console.log(lis);

// document.querySelectorAll
const items01 = document.querySelectorAll('ul.collection li.collection-item');

items01.forEach(function(item, index){
    console.log(item.innerText);
    item.textContent = `${index} : HeYYYYYYY`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(odd, index){
    console.log(index + ' : ' + odd);
    odd.style.background = 'green';
});

liEven.forEach(function(even, index){
    console.log(index + ' : ' + even);
    even.style.background = 'red';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#444';
}

console.log(liOdd);
