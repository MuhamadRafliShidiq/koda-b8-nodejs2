import moment from "moment";


/**
 * Converts date format from DD-MM-YYYY
 * to DD/MM/YYYY using Moment.js.
 *
 * @function convertDate
 * @param {string} inputTanggal - Date with DD-MM-YYYY format.
 * @returns {string|null}
 */
export default function convertDate(inputTanggal) {
    // Validasi tipe data
    if (typeof inputTanggal !== "string") {
        return null;
    }
    // Hilangkan spasi kosong
    const trimmedInput = inputTanggal.trim();
    // Validasi input kosong
    if (!trimmedInput) {
        return null;
    }
    // Validasi format dd-mm-yyyy
    const validDate = moment(trimmedInput, "DD-MM-YYYY", true);
    // Validasi tanggal
    if (!validDate.isValid()) {
        return null;
    }
    // Convert format
    return validDate.format("DD/MM/YYYY");
}
