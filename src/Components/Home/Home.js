import logo from "../../assets/logo.png";
import cartIcon from "../../assets/iconfinder_cart_353403.svg";
import produto from "../../assets/produto.png";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Header,
  ContentWrapper,
  ProductWrapper,
  Form,
  Input,
  Button,
} from "./Home.style";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Sidebar />
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          src={cartIcon}
          alt="cartIcon"
          className="svg"
          onClick={() => {
            navigate("/checkout");
          }}
        />
      </Header>
      <ContentWrapper>
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </ContentWrapper>
    </Wrapper>
  );
}

function SingleProduct() {
  const navigate = useNavigate();
  
  return (
    <ProductWrapper>
      <img src={produto} alt="produto" />
      <h1>VOLLUTO</h1>
      <h2>Café com notas de biscoito doce e acidez frutada</h2>
      <h3>R$ 2,80 cada</h3>
      <Form>
        <Input
          placeholder="0"
          name="amount"
          type="number"
          min="1"
          max="100"
          required
        />
        <Button>Adicionar ao carrinho</Button>
        <Button onClick={() => {
            navigate("/checkout");
          }}>Comprar</Button>
      </Form>
    </ProductWrapper>
  );
}
