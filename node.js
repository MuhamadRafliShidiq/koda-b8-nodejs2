import fs from "node:fs";
import readline from "node:readline";
import moment from "moment";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Membuat program convert tanggal dari input dd--mm--yyyy menjadi dd/mm/yyyy
function convertTanggal() {
    rl.question("Masukkan tanggal dalam format dd-mm-yyyy: ", (inputTanggal) => {
        const tanggal = moment(inputTanggal, "DD-MM-YYYY", true);
        if (!tanggal.isValid()) {
            console.log("Format tanggal salah");
            convertTanggal();
        }
        else {
            console.log(tanggal.format("DD/MM/YYYY"));
            rl.close();
        }
    });
}

convertTanggal();

