import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const NavTitle = () => {
  return (
    <S.WrapperInfo>
      <S.List>
        <S.Item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <S.DirectLink>Home</S.DirectLink>
          </Link>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <S.DirectLink>Sobre Nós</S.DirectLink>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <S.DirectLink>Contato</S.DirectLink>
          </Link>
        </S.Item>
      </S.List>
    </S.WrapperInfo>
  );
};
