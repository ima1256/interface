import { Stack, InputBase, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({
  inputValue,
  setInputValue,
  onSend,
  onKeyDown,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "4px 8px",
        borderRadius: "9999px", // bordes totalmente redondeados
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Escribe un mensaje..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyDown}
        multiline
      />
      <IconButton type="submit" sx={{ p: "10px" }} color="primary">
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default ChatInput;
