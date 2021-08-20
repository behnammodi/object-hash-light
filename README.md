# object-hash-light

Generate hashes from objects and values in modern browser

Less than < <b>300</b> Byte [bundlephobia](https://bundlephobia.com/package/object-hash-light)

# install

```bash
npm i object-hash-light
```

# usage

```js
import hash from "object-hash-light";

const result = await hash({ foo: "bar" });
```

# algorithms

SHA-1 (default), SHA-256, SHA-384, SHA-512

```js
const result = await hash({ foo: "bar" }, { algorithm: "SHA-512" });
```
