type Algorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

interface Option {
  algorithm?: Algorithm;
}

const subtle = (() => {
  try {
    return crypto.subtle;
  } catch {}
  try {
    return require("crypto").webcrypto.subtle;
  } catch {}
})();

async function hash(
  data: any,
  option: Option = { algorithm: "SHA-1" }
): Promise<string> {
  const uint8 = new TextEncoder().encode(JSON.stringify(data));
  const buffer = await subtle.digest(option.algorithm, uint8);
  const hex = Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hex;
}

export default hash;
