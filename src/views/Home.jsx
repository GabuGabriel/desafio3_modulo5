import '../App.css'
import React from "react";

export default function Home() {
    const { imagenes, toggleLike } = useImagenes();

    return (
        <div className="containerhome">
            <h1>Natural Pic</h1>
            <div class="container overflow-hidden text-center">
                <div class="row gy-5">
                    {imagenes.map((imagen) => (
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