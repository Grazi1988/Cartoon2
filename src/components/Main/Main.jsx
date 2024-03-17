import React, { useState } from "react"
import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"

import Gumball from "./ImagensMain/gumball.png"
import Meninas from "./ImagensMain/meninas.png"
import TomJerry from "./ImagensMain/tomjerry.png"

import * as S from "./StyleMain"

import Programacao from "../Programacao/Programacao.jsx"

function Main () {

    const [galeria, setGaleria] = useState([
        Gumball,
        Meninas,
        TomJerry
    ])

    return (

        <main>
            <S.PrimeiraSection>
                <img src={Scooby} alt="" />
                <img src={Ben10} alt="" />
                <img src={Looney} alt="" />
            </S.PrimeiraSection>

            <S.SegundaSection>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}
            </S.SegundaSection>

            <Programacao />

        </main>

    )

}
export default Main