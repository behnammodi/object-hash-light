const subtle = (() => {
    try {
        return crypto.subtle;
    }
    catch (_a) { }
    try {
        return require("crypto").webcrypto.subtle;
    }
    catch (_b) { }
})();
async function hash(data, option = { algorithm: "SHA-1" }) {
    const uint8 = new TextEncoder().encode(JSON.stringify(data));
    const buffer = await subtle.digest(option.algorithm, uint8);
    const hex = Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hex;
}
export default hash;
