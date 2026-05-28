/**
 * Converts date format from dd-mm-yyyy
 * to dd/mm/yyyy after validation.
 *
 * @function convertTanggal
 * @param {string} inputTanggal - Date with dd-mm-yyyy format.
 * @returns {string|null}
 */
function convertTanggal(inputTanggal) {
    // Validasi tipe data
    if (typeof inputTanggal !== "string") {
        return null;
    }
    const parts = inputTanggal.split("-");
    // Format harus dd-mm-yyyy
    if (parts.length !== 3) {
        return null;
    }
    const [hariStr, bulanStr, tahunStr] = parts;
    // Validasi panjang format
    if (hariStr.length !== 2 || bulanStr.length !== 2 || tahunStr.length !== 4) {
        return null;
    }
    const hari = Number(hariStr);
    const bulan = Number(bulanStr);
    const tahun = Number(tahunStr);

    // Validasi harus angka
    if (isNaN(hari) || isNaN(bulan) || isNaN(tahun)) {
        return null;
    }
    // Validasi bulan
    if (bulan < 1 || bulan > 12) {
        return null;
    }

    // Ambil jumlah hari dalam bulan
    const jumlahHari = new Date(tahun, bulan, 0).getDate();
    // Validasi hari
    if (hari < 1 || hari > jumlahHari) {
        return null;
    }

    return `${hariStr}/${bulanStr}/${tahunStr}`;
}

module.exports = convertTanggal;