import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

export const ButtonS = () => {
  return (
    <S.Button>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        Saiba mais
      </Link>
    </S.Button>
  )
}
