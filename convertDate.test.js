import { describe, it } from "node:test";
import assert from "node:assert/strict";
import convertDate from "./convertDate.js";

describe("convertDate", () => {
    it("should convert valid date format", () => {
        assert.strictEqual(convertDate("27-05-2005"), "27/05/2005"
        );
    });

    it("should return null for slash separator", () => {
        assert.strictEqual(convertDate("27/05/2005"), null);
    });

    it("should return null for reversed format", () => {
        assert.strictEqual(convertDate("2005-05-27"), null);
    });

    it("should return null for invalid month", () => {
        assert.strictEqual(convertDate("27-13-2005"), null);
    });

    it("should return null for invalid day", () => {
        assert.strictEqual(convertDate("32-05-2005"), null);
    });

    it("should return null for impossible date", () => {
        assert.strictEqual(convertDate("31-02-2005"), null);
    });

    it("should handle leap year correctly", () => {
        assert.strictEqual(convertDate("29-02-2024"), "29/02/2024");
    });

    it("should return null for non leap year", () => {
        assert.strictEqual(convertDate("29-02-2023"), null);
    });

    it("should return null for empty string", () => {
        assert.strictEqual(convertDate(""), null);
    });

    it("should return null for non-string input", () => {
        assert.strictEqual(convertDate(12345), null);
    });

    it("should return null for alphabet characters", () => {
        assert.strictEqual(convertDate("aa-bb-cccc"), null
        );
    });

    it("should return null for incomplete format", () => {
        assert.strictEqual(convertDate("1-1-2025"), null);
    });
});