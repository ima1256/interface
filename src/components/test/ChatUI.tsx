import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { TypingText } from "./TypingText";
import { Stack } from "@mui/material";

// Definimos el tipo de mensaje
interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "¡Hola! Soy tu asistente. ¿En qué puedo ayudarte?",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);

    // Simulación de respuesta
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Estoy procesando tu mensaje... 🤖" },
      ]);
    }, 1000);

    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-between p-4 bg-red-500">
      {/* Zona de mensajes */}
      <div className="overflow-y-auto">
        {messages.map((msg, i) => (
          <Stack
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Paper
              elevation={3}
              className={`rounded-2xl ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-br-sm"
                  : "bg-gray-200 text-gray-900 rounded-bl-sm"
              }`}
            >
              {msg.role === "assistant" ? (
                <TypingText text={msg.content} />
              ) : (
                msg.content
              )}
            </Paper>
          </Stack>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage}>
        <Stack
          className="border-gray-200 p-4 bg-white flex items-center gap-4"
          sx={{ flexDirection: "row" }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-100 rounded-xl"
          />
          <IconButton type="submit" color="primary" size="large">
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </div>
  );
}
