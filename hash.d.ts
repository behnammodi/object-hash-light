declare type Algorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";
interface Option {
    algorithm?: Algorithm;
}
declare function hash(data: any, option?: Option): Promise<string>;
export default hash;
