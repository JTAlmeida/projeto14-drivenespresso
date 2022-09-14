import Header from "../Header/Header";
import { Wrapper, ContentWrapper, Form, Input, Button } from "./Signup.style";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignUp(e) {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Form onSubmit={sendSignUp}>
          <Input
            placeholder="Nome"
            name="name"
            type="name"
            value={form.name}
            onChange={handleForm}
            required
          />
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
          <Input
            placeholder="Confirme a senha"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleForm}
            required
          />

          <Button type="submit">Cadastrar</Button>
          <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
}
