// Spread operator
// memeceah iterable menjadi single element

// const mhs = ['Idam', 'Nur', 'Kholis'];
// const spread = [...mhs[0]];
// console.log(spread)

// // Menggabunkan Array
// const mhs1 = ['Idam', 'Nur', 'Kholis']
// const mhs2 = ['Puspita', 'Putri']
// const gabung = [...mhs1,'Hehe',...mhs2]
// console.log(gabung)

// // Mengcopy Array
// let nama = ['Idam','Nur','Kholis'];
// let copy = [...nama];
// copy[0] = 'Lord'
// console.log(copy)

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
