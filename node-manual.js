// Membuat program convert tanggal dari input dd--mm--yyyy menjadi dd/mm/yyyy dengan menggunakan alur sendiri tanpa external package
const readline = require('readline');
const fs = require('fs');
const moment = require('moment');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTanggal() {
    rl.question("Masukkan Tanggal dalam format dd-mm-yyyy: ", (inputTanggal) => {
        const validasiFormat = /^\d{2}-\d{2}-\d{4}$/.test(inputTanggal);
        if (!validasiFormat) {
            console.log("Format tanggal salah");
            convertTanggal();
        } else {
            const hasil = inputTanggal.split("-").join("/");
            console.log(hasil);
            rl.close();
        }
    })
}

convertTanggal();
