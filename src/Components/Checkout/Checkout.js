import Header from "../Header/Header";
import produto from "../../assets/produto.png";
import {
  Wrapper,
  ContentWrapper,
  ProductWrapper,
  Form,
  Input,
  Footer,
  Button
} from "./Checkout.style";

export default function Checkout() {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </ContentWrapper>
      <Footer>
        <h1>Valor Final</h1>
        <Button>Finalizar compra</Button>
      </Footer>
    </Wrapper>
  );
}

function CartProduct() {
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
      </Form>
    </ProductWrapper>
  );
}
