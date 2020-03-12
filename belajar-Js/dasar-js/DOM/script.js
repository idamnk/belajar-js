// // DOM Selection
// // document.getElementById() => mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'pink';
// judul.innerHTML = 'Mas Idam';

// // document.getElementsByTagName => mengembalikan HTMLCollection
// const p = document.getElementsByTagName('p');
// for(let a=0; a<p.length; a++){
//     p[a].style.backgroundColor = 'lightblue';
// }
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '55px';

// // document.getElementsByClassName => mengembalikan HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript'

// // document.querySeletor => mengembalikan element
// let p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// let li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'lightblue';

// // document.querySelectorAll => mengembalikan NodeList
// let p = document.querySelectorAll('p');
// for(let a=0; a<p.length; a++){
//     p[a].style.backgroundColor = 'orange'
// }

// // merubah node root
// const sectionB = document.querySelector('#b');
// const p = sectionB.getElementsByTagName('p')[0];
// p.style.backgroundColor = 'red';

// // DOM Manipulation
// // element.innerHTML
// const judul = document.getElementById('judul')
// judul.innerHTML = '<m>Telooo Pendem</m>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'Hello World'

// // element.style(css)
// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'green'


// element.setAtribute
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'hem')