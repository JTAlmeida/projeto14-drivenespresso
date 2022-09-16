import Header from "../Header/Header";
import { Wrapper, ContentWrapper, Form, Input, Button } from "./Signin.style";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { signIn } from "../../service/API";
import UserContext from "../../context/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function Signup() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
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

  function sendSignIn(e) {
    e.preventDefault();

    setIsLoading(true);

    const promise = signIn(form);
    promise.catch((res) => {
      setIsLoading(false);
      return alert(res.response.data.message);
    });
    promise.then(async (res) => {
      setIsLoading(false);
      await setUser(res.data);
      localStorage.setItem(
        "drivenespresso",
        JSON.stringify({
          name: res.data.user.name,
          email: res.data.user.email,
          token: res.data.token,
        })
      );
      setForm({
        email: "",
        password: "",
      });
      navigate("/");
    });
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Form onSubmit={sendSignIn}>
          {isLoading ? (
            <>
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
              <Button type="submit">
                <ThreeDots color="rgba(255,255,255,1)" height={10} width={45} />
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}

          <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
}
