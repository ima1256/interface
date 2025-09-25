import { Stack, Typography } from "@mui/material";
import AddButton from "./AddButton";

const AgressorFoods = () => {
  // const [foods, setFoods] = useState(["macarrones, panes"]);

  return (
    <Stack
      sx={{ flexDirection: "column", gap: 2 }}
      className="justify-between items-center"
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          textAlign: "center",
          letterSpacing: 1,
          textTransform: "uppercase",
          mb: 2, // margin bottom
          fontFamily: "Patua One, cursive",
        }}
      >
        Alimentos Agresores
      </Typography>
      <div className="w-full">
        <AddButton />
      </div>
    </Stack>
  );
};

export default AgressorFoods;
