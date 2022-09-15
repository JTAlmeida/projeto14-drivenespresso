import Header from "../Header/Header";
import { Wrapper, ContentWrapper, Form, Input, Button } from "./Signin.style";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignIn(e) {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Form onSubmit={sendSignIn}>
          <Input
            placeholder="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleForm}
            required
          />
          <Input
            placeholder="Senha"
            name="password"
            type="password"
            value={form.password}
            onChange={handleForm}
            required
          />
          <Button type="submit">Entrar</Button>
          <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
}
