import React, { useState } from "react";
import * as S from "./styles";
import Hamburger from "hamburger-react";
import { NavTitle } from "../nav-title";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <S.Container>
      <S.WrapperImage>
        <S.Image src={require("../../images/LogoBranco.png")} alt="Logo" />
      </S.WrapperImage>
      <S.WrapperBurguer>
        <Hamburger
          direction="left"
          color="white"
          size={27}
          onToggle={showSideBar}
        />
        {sideBar && <NavTitle />}
      </S.WrapperBurguer>
    </S.Container>
  );
};

export default Navbar;
