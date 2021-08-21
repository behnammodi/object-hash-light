# object-hash-light

Generate hashes from objects and values in modern browser

Less than < <b>300</b> Bytes [bundlephobia](https://bundlephobia.com/package/object-hash-light)

# install

```bash
npm i object-hash-light
```

# usage

```js
import hash from "object-hash-light";

const result = await hash({ foo: "bar" });
// result is a5e744d0164540d33b1d7ea616c28f2fa97e754a
```

# algorithms

SHA-1 (default), SHA-256, SHA-384, SHA-512

```js
const result = await hash({ foo: "bar" }, { algorithm: "SHA-512" });
// result is 0db68ad4e41d3b26ba3fc48a5da7c9f616b813e77cb4e951187e1f2a37c2bad94041089f89f6012ee7b44e21f863c5d9553e3b665edae8640bb2274b555266eb
```
