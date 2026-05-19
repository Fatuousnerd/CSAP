"use client";

import { useInput } from "@/lib/zustand/stores";
import { Input } from "./ui/input";

const InputBar = () => {
  const input = useInput((s) => s.input);
  const setInput = useInput((s) => s.setInput);

  return (
    <>
      <Input
        type="text"
        placeholder="Enter plain text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default InputBar;
