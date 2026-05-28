const { describe, it } = require("node:test");
const assert = require("node:assert");
const convertTanggal = require("./manual.js");

describe("convertTanggal", () => {
    it("should convert valid date format", () => {
        const result = convertTanggal("12-05-2025");
        assert.strictEqual(result, "12/05/2025");
    });

    it("should return null for invalid format", () => {
        const result = convertTanggal("12/05/2025");
        assert.strictEqual(result, null);
    });

    it("should return null for invalid month", () => {
        const result = convertTanggal("12-13-2025");
        assert.strictEqual(result, null);
    });
    it("should return null for invalid day", () => {
        const result = convertTanggal("32-01-2025");
        assert.strictEqual(result, null);
    });
    it("should return null for impossible date", () => {
        const result = convertTanggal("31-02-2025");
        assert.strictEqual(result, null);
    });
    it("should return null for empty input", () => {
        const result = convertTanggal("");
        assert.strictEqual(result, null);
    });
    it("should return null for non-string input", () => {
        const result = convertTanggal(12345);
        assert.strictEqual(result, null);
    });
});