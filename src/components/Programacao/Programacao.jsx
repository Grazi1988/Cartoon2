import React, { useState } from "react"
import Dexter from "./ImagensProgramacao/dexter.png"
import VacaeFrango from "./ImagensProgramacao/vacaefrango.png"
import Dudu from "./ImagensProgramacao/dudu.png"
import Coragem from "./ImagensProgramacao/coragem.png"
import Jorel from "./ImagensProgramacao/jorel.png"
import Monica from "./ImagensProgramacao/turmadamonica.png"
import Steven from "./ImagensProgramacao/steven.png"
import Billy from "./ImagensProgramacao/billyemandy.png"

import * as S from "./StyleProgramacao"

function Programacao() {

    const [desenhos, setDesenhos] = useState([
        { hora: "7h00", nome: "O LABORATÓRIO DE DEXTER", imagem: Dexter, desenhoManha: true },
        { hora: "8h00", nome: "A VACA E O FRANGO", imagem: VacaeFrango, desenhoManha: true },
        { hora: "9h00", nome: "DU, DUDU E EDU", imagem: Dudu, desenhoManha: true },
        { hora: "10h00", nome: "CORAGEM, O CÃO COVARDE", imagem: Coragem, desenhoManha: true },
        { hora: "11h00", nome: "IRMÃO DO JOREL", imagem: Jorel, desenhoManha: true },
        { hora: "12h00", nome: "TURMA DA MÔNICA JOVEM", imagem: Monica, desenhoManha: false },
        { hora: "13h00", nome: "STEVEN UNIVERSO", imagem: Steven, desenhoManha: false },
        { hora: "14h00", nome: "BILLY E MANDY", imagem: Billy, desenhoManha: false },
    ])

    const desenhoAntesMeioDia = desenhos.filter((item) => item.desenhoManha === true)
    return (
        <>
            <S.Section>
                {desenhos.map((item) => (
                    <S.Card>
                        <h2>{item.hora}</h2>
                        <h2>{item.nome}</h2>
                        <img src={item.imagem} alt="" />
                    </S.Card>
                ))}
            </S.Section>
            
            <S.Section2>

                <h2>Desenhos da manhã</h2>

                {desenhoAntesMeioDia.map((item) => (
                    <S.CardManha>
                        <h2> {item.nome} </h2>
                        <h2> {item.hora} </h2>
                        <img src={item.imagem} alt={item.nome} />
                    </S.CardManha>
                ))}
            </S.Section2>

        </>
    )
}
export default Programacao