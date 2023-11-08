import { createContext, useContext, useState } from 'react';

const ImagenesContext = createContext()

export function ImagenesProvider({ children }) {
  const toggleLike = (id) => { }

  return (
    <ImagenesContext.Provider value={{ toggleLike }}>
      {children}
    </ImagenesContext.Provider>
  )
}

export function useImagenes() {
  return useContext(ImagenesContext)
}
