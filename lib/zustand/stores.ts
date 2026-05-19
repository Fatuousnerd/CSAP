import { CipherState, InputState } from "@/config/Types";
import { create } from "zustand";

export const useInput = create<InputState>((set) => ({
  input: "Hello World!",
  setInput: (i) => set({ input: i }),
}));

export const useCiphers = create<CipherState>((set) => ({
  caeser: "",
  rot13: "",
  vigenere: "",
  atbash: "",
  setCaeser: (c) => set({ caeser: c }),
  setRot13: (r) => set({ rot13: r }),
  setVigenere: (v) => set({ vigenere: v }),
  setAtbash: (a) => set({ atbash: a }),
}));
