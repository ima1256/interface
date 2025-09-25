import { Stack, TextField, IconButton, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

interface Message {
  text: string;
  timestamp: Date;
}

const Diabetes = () => {
  const [items, setItems] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newMessage: Message = {
        text: inputValue.trim(),
        timestamp: new Date(),
      };
      setItems([...items, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Stack
      spacing={2}
      sx={{
        height: "100%",
        padding: 2,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#212121", // Gris tipo ChatGPT
        borderRadius: 4,
      }}
    >
      {/* Primer Stack: mensajes */}
      <Stack
        spacing={1}
        sx={{ flexGrow: 1, overflowY: "auto", paddingRight: 1 }}
      >
        {items.map((item, index) => (
          <Paper
            key={index}
            sx={{
              padding: 1,
              maxWidth: "70%",
              alignSelf: "flex-start",
              backgroundColor: "#DCF8C6", // Verde tipo WhatsApp
              borderRadius: 2,
            }}
          >
            <Typography variant="body1">{item.text}</Typography>
            <Typography
              variant="caption"
              sx={{ display: "block", textAlign: "right" }}
            >
              {formatTime(item.timestamp)}
            </Typography>
          </Paper>
        ))}
      </Stack>

      {/* Input + Botón */}
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          label="Añadir ítem"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          fullWidth
        />
        <IconButton
          color="primary"
          onClick={addItem}
          sx={{ padding: "0 16px", height: "56px" }}
        >
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Diabetes;
