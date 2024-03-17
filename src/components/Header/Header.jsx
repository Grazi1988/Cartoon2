import React from "react"
import Cn from "./ImagensHeader/cn.png"
import Jogo from "./ImagensHeader/controle.png"
import Programacao from "./ImagensHeader/programacao.png"

import * as S from "./StyleHeader"


function Header() {
    return (
        <S.HeaderStyle>
            <img src={Cn} alt="" />

            <S.Section>
                <S.Div>
                    <img src={Jogo} alt="" />
                    <h2>JOGOS</h2>
                </S.Div>

                <S.Div>
                    <img src={Programacao} alt="" />
                    <h2>PROGRAMAÇÃOS</h2>
                </S.Div>


            </S.Section>
        </S.HeaderStyle>

    )
}
export default Header