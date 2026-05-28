const readline = require("readline");
const convertTanggal = require("./manual.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askDate() {
    rl.question("Masukkan tanggal (dd-mm-yyyy): ", (input) => {
        const hasil = convertTanggal(input);
        // Jika validasi gagal
        if (!hasil) {
            console.log("Silakan coba lagi.\n");
            return askDate();
        }
        console.log(`Hasil convert: ${hasil}`);
        rl.close();
    });
}

askDate();