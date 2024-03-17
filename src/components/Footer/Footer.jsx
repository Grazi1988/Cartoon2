import React from "react"
import Warner from "./ImagensFooter/warner.png"

import Git from "./ImagensFooter/git.png"
import Linkedin from "./ImagensFooter/linkedin.png"

import * as S from "./StyleFooter.jsx"

function Footer() {
    return (
        <footer>
            <S.PrimeiraSectionFooter>
                <img src={Warner} alt="" />

                <S.ListFooter>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.ListFooter>

                <S.RedesSociais>
                    <img src={Git} alt="" />
                    <img src={Linkedin} alt="" />
                </S.RedesSociais>

            </S.PrimeiraSectionFooter>


            <S.SegundaSectionFooter>
                <S.P>© 2024 Cartoon Network</S.P>
            </S.SegundaSectionFooter>

        </footer>
    )
}
export default Footer