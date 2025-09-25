import { useState } from "react";

const Turntable: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      {/* Tocadiscos */}
      <div className="relative w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center shadow-2xl">
        {/* Disco */}
        <div
          className={`w-56 h-56 rounded-full bg-gradient-to-br from-gray-700 to-black border-4 border-gray-600 flex items-center justify-center ${
            playing ? "animate-spin-slow" : ""
          }`}
        >
          {/* Etiqueta central */}
          <div className="w-16 h-16 bg-red-500 rounded-full border-4 border-black"></div>
        </div>

        {/* Brazo */}
        <div
          className={`absolute w-32 h-2 bg-gray-400 rounded-lg origin-left top-16 left-1/2 transform ${
            playing ? "rotate-45" : "rotate-12"
          } transition-transform duration-700`}
        >
          <div className="absolute right-0 w-6 h-6 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Botón Play/Stop */}
      <button
        onClick={() => setPlaying(!playing)}
        className="mt-8 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg"
      >
        {playing ? "Stop" : "Play"}
      </button>

      {/* Animación spin personalizada */}
      <style>{`
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Turntable;
