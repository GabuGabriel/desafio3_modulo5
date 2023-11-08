import React, { createContext, useContext, useState } from "react";
import data from "../../../public/fotos.json"

const ImagenesContext = createContext();

export function ImagenesProvider({ children }) {
  const [imagenes, setImagenes] = useState(data.photos);

  const toggleLike = (id) => {
    setImagenes((prevImagenes) =>
      prevImagenes.map((imagen) =>
        imagen.id === id ? { ...imagen, liked: !imagen.liked } : imagen
      )
    );
  };

  return (
    <ImagenesContext.Provider value={{ imagenes, toggleLike }}>
      {children}
    </ImagenesContext.Provider>
  );
}

export function useImagenes() {
  return useContext(ImagenesContext);
}
