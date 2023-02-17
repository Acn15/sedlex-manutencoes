import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_padpm0r",
        "template_u9br6q1",
        templateParams,
        "ICg-rBMjiVTn_s8Oj"
      )
      .then(
        (res) => {
          toast.success("E-mail enviado");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          toast.error("Algo deu errado!");
        }
      );
  }

  return (
    <S.Container>
      <S.WrapperMail>
        <S.Title>Contato</S.Title>
        <S.SendMail onSubmit={sendEmail}>
          <S.InputMail
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          />
          <S.InputMail
            placeholder="Digite seu e-mail..."
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <S.InputMailText
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            required
            value={message}
          />
          <S.SubmitButton>Enviar</S.SubmitButton>
          <ToastContainer />
        </S.SendMail>
      </S.WrapperMail>
      <S.WrapperMap>
        <S.Title>Sedlex Manutenções</S.Title>
        <S.InfoMap>Av. Visc. de Nova Granada, 1165 - Vila Osasco</S.InfoMap>
        <S.Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.925334248811!2d-46.7895059844241!3d-23.535187766512788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffa7ec544359%3A0xa698bb9ce4b07194!2sAv.%20Visc.%20de%20Nova%20Granada%2C%201165%20-%20Vila%20Osasco%2C%20Osasco%20-%20SP%2C%2006080-125!5e0!3m2!1spt-BR!2sbr!4v1675971958348!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
        />
      </S.WrapperMap>
    </S.Container>
  );
};
