/* eslint-disable no-unused-vars */
import fs from "node:fs"
import readline from "node:readline";
import moment from "moment";
import convertDate from "./convertDate.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function date(input) {
    rl.question("Masukan tanggal dalam format dd-mm-yyyy :", (input) => {
        const result = convertDate(input);

        if (!result) {
            console.log("Format tanggal salah!")
            return date();
        }
        console.log(result);
        rl.close
    })
}