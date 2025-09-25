import { Paper, Button } from "@mui/material";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function OutreachCard({
  title,
  description,
  image,
  buttonText = "Acción",
  onButtonClick,
}: CardProps) {
  return (
    <Paper
      elevation={5}
      className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Imagen superior */}
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}

      {/* Contenido */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </Paper>
  );
}
