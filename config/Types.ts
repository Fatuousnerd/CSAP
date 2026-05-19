export interface ThemeType {
  theme: string;
  toggleTheme: () => void;
}

export type InputState = { input: string; setInput: (i: string) => void };

export type CipherState = {
  caeser: string;
  rot13: string;
  vigenere: string;
  atbash: string;
  setCaeser: (c: string) => void;
  setRot13: (r: string) => void;
  setVigenere: (r: string) => void;
  setAtbash: (r: string) => void;
};
