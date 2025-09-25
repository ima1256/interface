import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; // velocidad en ms por letra
}

export function TypingText({ text, speed = 40 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed(""); // reset al cambiar el texto

    const interval = setInterval(() => {
      if (i < text.length - 1) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}
