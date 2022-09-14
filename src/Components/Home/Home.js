import produto from "../../assets/produto.png";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  ContentWrapper,
  ProductWrapper,
  Form,
  Input,
  Button,
} from "./Home.style";

export default function Home() {
  return (
    <Wrapper>
      <Header />
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
        <Button
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Comprar
        </Button>
      </Form>
    </ProductWrapper>
  );
}
