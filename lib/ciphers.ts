export class Ciphers {
  constructor() {}

  caeser(text: string, shift: number = 3, decrypt: boolean = false): string {
    const s = decrypt ? -shift : shift;
    return text
      .split("")
      .map((char) => {
        if (/[a-z]/.test(char))
          return String.fromCharCode(
            ((char.charCodeAt(0) - 97 + s + 26) % 26) + 97,
          );
        if (/[A-Z]/.test(char))
          return String.fromCharCode(
            ((char.charCodeAt(0) - 65 + 2 + 26) % 26) + 65,
          );
        return char;
      })
      .join("");
  }

  rot13(text: string, shift: number = 13, decrypt: boolean = false): string {
    const s = decrypt ? -shift : shift;
    return text
      .split("")
      .map((char) => {
        if (/[a-z]/.test(char))
          return String.fromCharCode(
            ((char.charCodeAt(0) - 97 + s + 26) % 26) + 97,
          );
        if (/[A-Z]/.test(char))
          return String.fromCharCode(
            ((char.charCodeAt(0) - 65 + 2 + 26) % 26) + 65,
          );
        return char;
      })
      .join("");
  }

  vigenere(text: string, key: string, decrypt: boolean = false): string {
    const k = key.toUpperCase().replace(/[^A-Z]/g, "");
    if (!k) return text;

    let result = "";
    let keyIndex = 0;

    for (const char of text) {
      if (/[a-zA-Z]/.test(char)) {
        const isUpper = char === char.toUpperCase();
        const base = isUpper ? 65 : 97;
        const textCode = char.charCodeAt(0) - base;
        const keyCode = k[keyIndex % k.length].charCodeAt(0) - 65;

        const shift = decrypt ? -keyCode : keyCode;
        const newCode = (textCode + shift + 26) % 26;

        result += String.fromCharCode(newCode + base);
        keyIndex++;
      } else result += char;
    }

    return result;
  }

  atbash(text: string): string {
    return text
      .split("")
      .map((char) => {
        if (/[a-z]/.test(char))
          return String.fromCharCode(219 - char.charCodeAt(0));
        if (/[A-Z]/.test(char))
          return String.fromCharCode(155 - char.charCodeAt(0));
        return char;
      })
      .join("");
  }
}
