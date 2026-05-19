import { CryptoHasher } from "bun";
export class Hashing {
  constructor() {}

  hashText(text: string, algorithm: "md5"): string {
    const hasher = new CryptoHasher(algorithm);
    hasher.update(text);
    return hasher.digest("hex");
  }
}
