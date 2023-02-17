import React from 'react'
import * as S from './styles'
export const PageNotFound = () => {
  return (
    <S.Container>
      <S.Text>
        <S.Title> Página em manutenção</S.Title>
      </S.Text>
      <S.GroupImage>
        <S.ImgStart src={require('../../images/manutencao.png')} alt="Logo" />
      </S.GroupImage>
      <S.Home href="/">Go Home</S.Home>
    </S.Container>
  )
}
