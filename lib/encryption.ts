// import { CryptoHasher } from "bun";
// import { createCipheriv, randomBytes } from "crypto";

// export class Enctryption {
//   private ALGORITHM = "aes-256-gcm";
//   constructor() {}

//   encryptAES(text: string, password: string): string {
//     const salt = randomBytes(16);
//     const key = CryptoHasher.hash("sha256", password + salt.toString("hex"));
//     const iv = randomBytes(12);

//     const cipher = createCipheriv(this.ALGORITHM, Buffer.from(key, "hex"), iv);

//     let encrypted = cipher.update(text, "utf8", "hex");
//     encrypted += cipher.final("hex");

//     const authTag = cipher.getAuthTag().toString("hex");

//     return `${salt.toString("hex")}:${iv.toString("hex")}:${authTag}:${encrypted}`;
//   }
// }
