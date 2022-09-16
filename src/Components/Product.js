import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";
import {
  ProductWrapper,
  Form,
  Input,
  Button,
} from "../Components/Home/Home.style";

export default function Product(props) {
  const { price, productImage, description, name, id } = props;

  const { cardItems, setCardItems } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [qtd, setQtd] = useState("");

  function lala(e) {
    e.preventDefault();
    setQtd(qtd);
  }

  function addItemToCard(id, name, price) {
    //  const exist = cardItems.find((product)=> product.pId === id);
    // if(!exist){
    setCardItems([
      ...cardItems,
      {
        pId: id,
        pName: name,
        pPrice: price,
        qtd: qtd,
      },
    ]);
    // }
  }

  function valuePrice(price) {
    const newValue = (price / 100).toFixed(2).replace(".", ",");
    return newValue;
  }

  return (
    <>
      <ProductWrapper>
        <img src={productImage} alt="produto" />
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>R${valuePrice(price)}</h3>
        <Form onSubmit={lala}>
          <Input
            placeholder="0"
            name="amount"
            type="number"
            min="1"
            max="100"
            required
            value={qtd}
            onChange={(e) => setQtd(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => {
              addItemToCard(id, name, price);
            }}
          >
            Adicionar ao carrinho
          </Button>
          <Button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Comprar
          </Button>
        </Form>
      </ProductWrapper>
    </>
  );
}
