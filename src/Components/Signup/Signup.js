import Header from "../Header/Header";
import { Wrapper, ContentWrapper, Form, Input, Button } from "./Signup.style";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import { signUp } from "../../service/API";
import { ThreeDots } from "react-loader-spinner";

export default function Signup() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      alert("Você já está logado!");
      navigate("/");
    }
  }, []);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignUp(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("As senhas devem ser iguais!");
    }
    setIsLoading(true);

    const promise = signUp(form);
    promise
      .catch((res) => {
        setIsLoading(false);
        return alert(res.response.data.message);
      })
      .then((res) => {
        if (!res) {
          return;
        }

        setIsLoading(false);
        setForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/sign-in");
      });
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Form onSubmit={sendSignUp}>
          {isLoading ? (
            <>
              <Input
                disabled
                placeholder="Nome"
                name="name"
                type="name"
                value={form.name}
              />
              <Input
                disabled
                placeholder="E-mail"
                name="email"
                type="email"
                value={form.email}
              />
              <Input
                disabled
                placeholder="Senha"
                name="password"
                type="password"
                value={form.password}
              />
              <Input
                disabled
                placeholder="Confirme a senha"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
              />

              <Button disabled type="submit">
                <ThreeDots color="rgba(255,255,255,1)" height={10} with={45} />
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
          <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
}
