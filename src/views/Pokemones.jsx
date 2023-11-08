import '../App.css'
import React from "react";
import { useImagenes } from "../components/Contexto/PokeContexto";

export default function Favoritos() {
    const { imagenes } = useImagenes();
    const favoritos = imagenes.filter((imagen) => imagen.liked);

    return (
        <div className="containerFavoritas">
            <h1>Fotos favoritas</h1>
            <div class="container overflow-hidden text-center">
                <div class="row gy-5">
                    {favoritos.map((imagen) => (
                        <div class="col">
                            <div class="card" style={{ width: "18rem", height: "18rem" }} key={imagen.id} >
                                <img class="card-img-top" src={imagen.src.tiny} alt={imagen.alt} />
                                <div class="card-body ">
                                    <h5 class="card-title">{imagen.photographer} </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}