// Secara sederhana Synchronous adalah proses pengeksekusian 
// kode yang dijalankan secara berurutan 
// berdasarkan kode yang tertulis.

// Contohnya:

    console.log(1);

    console.log(2);

    console.log(3);


// Dalam kasus Synchronous di atas, dapat disimpulkan, 
// hasil yang didapatkan dari kode sesuai dengan urutan yang kita tulis.

// Berbeda dengan Synchronous, proses Asyncrhonous adalah proses 
// pengeksekusian kode yang tidak sesuai dengan urutan yang ada 
// atau bisa disebut menjalankan perintah selanjutnya 
// tanpa menunggu perintah sebelumnya selesai.

// Contohnya:
    
    console.log(1);
    
    setTimeout(function () {
    
    console.log(2);
    
    }, 3000);
    
    console.log(3);

// Perintah dijalankan bersamaan namun hasil untuk console.log(2) 
// dicetak pada akhir, karena proses setTimeout belum selesai, 
// tanpa menunggu proses setTimeout tersebut maka perintah selanjutnya 
// dijalankan.