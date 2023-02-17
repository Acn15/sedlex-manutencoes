import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const ButtonR = () => {
  return (
    <S.Button>
      <Link to="/aboutus" style={{ textDecoration: "none" }}>
        Saiba mais
      </Link>
    </S.Button>
  );
};
