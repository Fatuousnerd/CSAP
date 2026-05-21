"use client";

import InputBar from "@/components/InputBar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Ciphers } from "@/lib/ciphers";
import { useCiphers, useInput } from "@/lib/zustand/stores";
import { useEffect } from "react";

const Page = () => {
  const ciphers = new Ciphers();

  const input = useInput((s) => s.input);
  const caeser = useCiphers((s) => s.caeser);
  const rot13 = useCiphers((s) => s.rot13);
  const vigenere = useCiphers((s) => s.vigenere);
  const atbash = useCiphers((s) => s.atbash);

  const setCaeser = useCiphers((s) => s.setCaeser);
  const setRot13 = useCiphers((s) => s.setRot13);
  const setVigenere = useCiphers((s) => s.setVigenere);
  const setAtbash = useCiphers((s) => s.setAtbash);

  useEffect(() => {
    setCaeser(ciphers.caeser(input, 3));
    setRot13(ciphers.rot13(input, 13));
    setVigenere(ciphers.vigenere(input, "KEY"));
    setAtbash(ciphers.atbash(input));
  }, [input]);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-stretch justify-center gap-5 p-5">
        <InputBar />
        <Tabs defaultValue="caeser">
          <TabsList variant={"line"}>
            {["caeser", "rot13", "vigenere", "atbash"].map((cipher) => {
              return (
                <TabsTrigger key={cipher} value={cipher} className="capitalize">
                  {cipher}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {["caeser", "rot13", "vigenere", "atbash"].map((cipher) => {
            const cipherValues: Record<string, string> = {
              caeser: caeser,
              rot13: rot13,
              vigenere: vigenere,
              atbash: atbash,
            };
            const expl: Record<string, string> = {
              caeser:
                "The Caeser Cipher shifts the alphabet a set number of positions(Default of 3). The cipher wraps around, meaning, when you get to 'Z', you start back at 'A'. E.g., With a shift of 3, a becomes d.",
              rot13:
                "This is just a Caeser Cipher but with the shift being 13 positions.",
              vigenere:
                "This is a Polyalphabetic cipher. It uses a keyword, where each letter tells how much to shift the corresponding plain text. Kinda like multiple Caeser ciphers.",
              atbash:
                "The Atbash Cipher reverses the alphabet completely. A becomes Z and vice-versa. B becomes Y and vice-cersa etc.",
            };

            return (
              <TabsContent key={cipher} value={cipher}>
                <Card>
                  <CardContent>
                    <Textarea
                      value={cipherValues[cipher] ?? ""}
                      placeholder="Ciphered Text will appear here..."
                      disabled
                    />
                  </CardContent>
                  <CardFooter>{expl[cipher] ?? cipher}</CardFooter>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default Page;
