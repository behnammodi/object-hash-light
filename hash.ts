type Algorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

interface Option {
  algorithm?: Algorithm;
}

async function hash(
  data: any,
  option: Option = { algorithm: "SHA-1" }
): Promise<string> {
  const msgUint8 = new TextEncoder().encode(JSON.stringify(data));
  const buffer = await crypto.subtle.digest(option.algorithm, msgUint8);
  const hex = Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hex;
}

export default hash;
