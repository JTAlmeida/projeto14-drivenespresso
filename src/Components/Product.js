import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";

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
    setCardItems([
      ...cardItems,
      {
        pId: id,
        pName: name,
        pPrice: price,
        qtd: qtd,
      },
    ]);
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
          <img
            src={minus}
            alt="-"
            onClick={() => {
              if (Number(qtd) === 0) {
                return;
              }
              setQtd(Number(qtd) - 1);
            }}
          />
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
          <img
            src={plus}
            alt="+"
            onClick={() => {
              {
                if (Number(qtd) === 100) {
                  return alert("Não é possível adicionar mais de 100 itens.");
                }
                setQtd(Number(qtd) + 1);
              }
            }}
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
