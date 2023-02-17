import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import * as S from "./styles";

export const AboutUs = () => {
  return (
    <S.Container>
      <S.WrapperImage>
        <S.ContainerImage>
          <Carousel
            wrapAround={true}
            autoplay={true}
            pauseOnHover={true}
            renderCenterLeftControls={({ previousSlide }) => (
              <S.Button onClick={previousSlide}>
                <BsArrowLeft />
              </S.Button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <S.Button onClick={nextSlide}>
                <BsArrowRight />
              </S.Button>
            )}
          >
            <S.Img src={require("../../images/frankUsavel.png")} />
            <S.Img src={require("../../images/usaveltalvz.png")} />
            <S.Img src={require("../../images/caixaDeForca2.png")} />
            <S.Img src={require("../../images/bombas.png")} />
          </Carousel>
        </S.ContainerImage>
      </S.WrapperImage>
      <S.ContainerInformation>
        <S.WrapperInformation>
          <S.Title>Sobre nós</S.Title>
          <S.Content>
            A Sedlex é uma empresa de serviços de manutenção e elétrica que
            possui amplo conhecimento na área com foco no desenvolvimento de
            soluções de acordo com as necessidades apresentadas pelo mercado.
            Prezamos sempre pelo bom atendimento, segurança e responsabilidade
            nos serviços. Temos uma equipe altamente qualificada, com ampla
            experiência na área.
          </S.Content>
          <S.Li>Centrais de alarmes;</S.Li>
          <S.Li>Motores de portão;</S.Li>
          <S.Li>Bombas hidráulicas;</S.Li>
          <S.Li>Centrais de monitoramento CFTV</S.Li>
        </S.WrapperInformation>
        <S.WrapperInformation>
          <S.Title>História</S.Title>
          <S.Content>
            A empresa Sedlex Manutenções foi fundada em 2020 como a
            concretização de uma ideia que por muito tempo foi sonhada e
            idealizada. Especializada em parte elétrica e manutenção, a empresa
            preza pela qualidade de seus serviços e equipamentos, buscando
            sempre se atualizar na área e no mercado, a fim de entregar
            excelência para seus clientes.
          </S.Content>
        </S.WrapperInformation>
      </S.ContainerInformation>
    </S.Container>
  );
};
