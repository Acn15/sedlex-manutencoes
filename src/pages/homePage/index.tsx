import React from "react";
import * as S from "./styles";
import { ButtonR } from "../../components/button-about";
import { ButtonS } from "../../components/button-services";

export const Home = () => {
  return (
    <S.Container>
      <S.WrapperTopInfo>
        <S.GroupImage>
          <S.Img src={require("../../images/fotoMuitoUsavel.png")} alt="Logo" />
        </S.GroupImage>
        <S.Group>
          <S.Title> Conheça mais sobre nós</S.Title>
          <S.Text>
            A Sedlex é uma empresa de manutenção e elétrica que possui amplo
            conhecimento na área, com foco no desenvolvimento de soluções de
            acordo com as necessidades apresentadas pelo mercado. Sempre
            prezando pelo bom atendimento, com segurança e
            responsabilidade nos serviços.
          </S.Text>
          <ButtonR />
        </S.Group>
      </S.WrapperTopInfo>
      <S.WrapperBottomInfo>
        <S.Group>
          <S.Title> Conheça nossos serviços</S.Title>
          <S.Text>
            Está a procura de um profissional eletricista para o seu
            estabelecimento ou casa? Aqui na Sedlex, nós trabalhamos com
            centrais de alarmes, placas e motores de portão, bombas hidráulicas
            e centrais de monitoramento CFTV. Entre em contato e solicite seu
            orçamento.
          </S.Text>
          <ButtonS />
        </S.Group>

        <S.GroupImage>
          <S.Img src={require("../../images/foto100usavel.png")} alt="Logo" />
        </S.GroupImage>
      </S.WrapperBottomInfo>
    </S.Container>
  );
};
